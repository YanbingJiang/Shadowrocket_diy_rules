/*
哔哩哔哩签到脚本
Author: @ClydeTime, simplied by @YanbingJiang
软件功能: 仅登录/大会员积分签到+任务等
************************
1.获取cookie
  ①后台退出手机B站客户端的情况下，重新打开APP进入主页
  ②通过网址[https://www.bilibili.com]登录，不支持请求桌面网站。
如通知成功获取cookie, 则可以使用此签到脚本.
获取Cookie后, 请将Cookie脚本禁用并移除主机名, 以免产生不必要的MITM.
纯登录签到，获得登陆经验/硬币 - 无观看
/***********************
Shadowrocket 脚本配置:
************************
[Script]
B站每日任务 = type=cron,cronexp=30 7 * * *,script-path=https://raw.githubusercontent.com/YanbingJiang/Shadowrocket_diy_rules/main/Archives/Scripts/bilibili_checkin_basic.js

#以下cookie获取方式二选其一即可
B站获取Cookie(APP) = type=http-request,pattern=^https:\/\/app\.bilibili\.com\/x\/resource\/domain\?,script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js
#B站获取Cookie(网页) = type=http-request,pattern=^https:\/\/m.bilibili.com/$,script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js
*/

const format = (ts, fmt = "yyyy-MM-dd HH:mm:ss") => {
  return $.time(fmt, ts);
};

const check = (key) =>
  !config.hasOwnProperty(key) ||
  !config[key].hasOwnProperty("time") ||
  !(config[key]["num"] > 0) ||
  format(new Date().toDateString()) > config[key].time;

const cookie2object = (cookie) => {
  var obj = {};
  var arr = cookie.split("; ");
  arr.forEach(function (val) {
    var brr = val.split("=");
    obj[brr[0]] = brr[1];
  });
  return obj;
};

const $ = new Env("bilibili");
const name = "bilibili";
const startTime = $.time("yyyy-MM-dd HH:mm:ss");
const config = {
  cookie: {},
  cards: [],
  headers: {},
};

!(async () => {
  if (typeof $request != "undefined") {
    console.log("- 正在获取cookie，请稍后");
    GetCookie();
  } else {
    console.log("- 任务正在进行中...");
    signBiliBili();
  }
})();

function GetCookie() {
  if ("object" == typeof $request) {
    if (typeof $request.headers.cookie != "undefined") {
      config.headers.Cookie = $request.headers.cookie;
    } else if (typeof $request.headers.Cookie != "undefined") {
      config.headers.Cookie = $request.headers.Cookie;
    }
    config.cookie = cookie2object(config.headers.Cookie);
    if (config.cookie.DedeUserID) {
      console.log("- cookie获取成功");
      $.setdata("", name + "_score");
      let url = $request.url;
      let key = /.*access_key=(.*?)&build/.exec(url)[1];
      $.setdata(key, name + "_key");
      $.setdata(JSON.stringify(config.headers), name + "_headers")
        ? $.msg(name, "cookie catch success", "获得 cookie 成功")
        : $.msg(name, "cookie catch failed", "获得 cookie 失败");
    } else {
      console.log("- 尚未登录, 请登录后再重新获取cookie");
    }
  }
  $.done();
}

async function signBiliBili() {
  config.headers = $.getjson(name + "_headers", {});
  config.user = $.getjson(name + "_user", {});
  config.score = $.getjson(name + "_score", {});
  config.key = $.getdata(name + "_key");
  config.cookie = cookie2object(config.headers.Cookie);

  await queryStatus();
  if (config.cookie && (await me())) {
    var flag = true;

    if (config.user.num < 1) {
      flag = false;
    }

    await liveSign();
    await vipScoreSign();
    if (config.user.vipStatus == 1) {
      await vipScoreGo();
      await vipScoreFan();
      await vipScoreMovie();
      await vipWatchAccept();
    }

    if (config.user.num < 1) {
      flag = false;
    } else {
      flag = true;
    }
    let title = `${name} 每日任务 登录${config.user.num}${
      flag ? "已完成" : "未完成"
    }`;
    console.log(`#### ${title}`);

    let u = `登录时间: ${config.user.time}`;
    console.log(`- ${u}`);

    //$.msg(title, `📅  ${format(startTime)}`, `${u}\n${w}\n${s}`);

    notice = {
      title: `${name} [${config.user.uname}]`,
      content:
        `更新时间: ${format(startTime)}\n` +
        `任务:登录${check("user") ? "" : "成功!"}\n` +
        `经验:当前${config.user.level_info.current_exp}/下级${config.user.level_info.next_exp}/硬币${config.user.money}\n` +
        `等级:${config.user.level_info.current_level} 升级:${config.user.next_day} 天 `,
    };
    if (!flag) {
      $.msg(
        notice.title,
        "",
        `- 有未完成的任务, 请检查console查看具体原因, 可尝试手动执行完成任务\n` +
          notice.content,
      );
    } else {
      $.msg(notice.title, "", notice.content);
    }
    $.done();
  } else {
    $.msg(`${name} 任务失败`, `📅 ${format(startTime)}`, "请更新cookie");
    $.done();
  }
}

async function queryStatus() {
  console.log("#### 检查任务进行状况");
  const url = "https://api.bilibili.com/x/member/web/exp/reward";
  const headers = {
    cookie: `DedeUserID=${config.cookie.DedeUserID}; DedeUserID__ckMd5=${config.cookie.DedeUserID__ckMd5}; SESSDATA=${config.cookie.SESSDATA}; bili_jct=${config.cookie.bili_jct}; sid=${config.cookie.sid}`,
  };
  const myRequest = {
    url: url,
    headers: headers,
  };
  return $.http.get(myRequest).then(
    (response) => {
      const body = JSON.parse(response.body);
      if (body.code == 0) {
        if (body.data.login) {
          console.log("- 今日已登录");
          config.user.num = config.user.num == 0 ? 1 : config.user.num;
          if (!config["user"].hasOwnProperty("time")) {
            config.user.time = format(startTime);
          }
          $.setdata(JSON.stringify(config.user), name + "_user");
        } else {
          console.log("- 今日尚未登录");
          config.user.num = 0;
          $.setdata(JSON.stringify(config.user), name + "_user");
        }
        return true;
      } else {
        console.log("- 查询失败");
        console.log("- 失败原因 " + body.message);
        return false;
      }
    },
    (reason) => {
      console.log("- 查询失败");
      console.log(`- headers ${JSON.stringify(response.headers)}`);
      return false;
    },
  );
}

async function liveSign() {
  console.log("#### 直播签到任务");
  const url = "https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/DoSign";
  const headers = {
    cookie: `DedeUserID=${config.cookie.DedeUserID}; DedeUserID__ckMd5=${config.cookie.DedeUserID__ckMd5}; SESSDATA=${config.cookie.SESSDATA}; bili_jct=${config.cookie.bili_jct}; sid=${config.cookie.sid}`,
  };
  const myRequest = {
    url: url,
    headers: headers,
  };
  await $.http.get(myRequest).then(
    (response) => {
      let body = JSON.parse(response.body);
      if (body && body.code == 0) {
        console.log("- 直播签到成功");
        console.log(
          `签到奖励:${body.data.text},连续签到${body.data.hadSignDays}天`,
        );
        return true;
      } else if (body && body.code == 1011040) {
        console.log("- 今日已完成直播签到任务");
        return false;
      } else {
        console.log("- 直播签到失败");
        console.log("- 失败原因 " + body.message);
        return false;
      }
    },
    (reason) => {
      console.log(`- headers ${JSON.stringify(response.headers)}`);
      console.log("- 直播签到失败");
      return false;
    },
  );
}

async function vipScoreSign() {
  console.log("#### 大会员大积分签到任务");
  if (config.user.vipStatus == 0) {
    console.log("- 当前用户非大会员, 无法完成任务");
  } else {
    if (check("score")) {
      const url = "https://api.bilibili.com/pgc/activity/score/task/sign";
      const headers = {
        Referer: "https://big.bilibili.com/mobile/bigPoint/task",
        Cookie: `DedeUserID=${config.cookie.DedeUserID}; DedeUserID__ckMd5=${config.cookie.DedeUserID__ckMd5}; SESSDATA=${config.cookie.SESSDATA}; bili_jct=${config.cookie.bili_jct}; sid=${config.cookie.sid}`,
      };
      const myRequest = {
        url: url,
        headers: headers,
      };
      await $.http.post(myRequest).then(
        (response) => {
          const body = JSON.parse(response.body);
          if (body.code == 0 && body.message == "success") {
            console.log("- 大会员大积分任务签到成功");
            config.score.time = format(startTime);
            config.score.num = 1;
            $.setdata(JSON.stringify(config.score), name + "_score");
            return true;
          } else {
            console.log("- 大会员大积分任务签到失败");
            console.log("- 失败原因 " + body.message);
            return false;
          }
        },
        (reason) => {
          console.log("- 大会员大积分任务签到失败");
          console.log(`- headers ${JSON.stringify(response.headers)}`);
          return false;
        },
      );
    } else {
      console.log("- 今日已完成会员积分签到任务");
      return false;
    }
  }
}

async function vipScoreGo() {
  console.log("#### 大会员浏览会员购10s任务");
  let url = `https://show.bilibili.com/api/activity/fire/common/event/dispatch`;
  let headers = {
    "Content-Type": `application/json`,
    Cookie: `DedeUserID=${config.cookie.DedeUserID}; DedeUserID__ckMd5=${config.cookie.DedeUserID__ckMd5}; SESSDATA=${config.cookie.SESSDATA}; bili_jct=${config.cookie.bili_jct}; sid=${config.cookie.sid}`,
  };
  let body = `{"eventId":"hevent_oy4b7h3epeb"}`;
  const myRequest = {
    url: url,
    headers: headers,
    body: body,
  };
  await $.http.post(myRequest).then(
    (response) => {
      const body = JSON.parse(response.body);
      if (body.code == 0 && body.message == "SUCCESS") {
        console.log("- 浏览会员购任务成功,获得10点大积分");
        return true;
      } else {
        console.log("- 浏览会员购任务失败");
        console.log("- 失败原因 " + body.message);
        return false;
      }
    },
    (reason) => {
      console.log("- 浏览会员购任务失败");
      console.log(`- headers ${JSON.stringify(response.headers)}`);
      return false;
    },
  );
}

async function vipScoreFan() {
  console.log("#### 大会员浏览追番频道10s任务");
  let url = `https://api.bilibili.com/pgc/activity/deliver/task/complete?access_key=${config.key}&position=jp_channel&sign=768d600feba34e6d1109e4157c0f0c5f&task_sign=557D1ACE13E9E81393259FFB621D6D0E`;
  let headers = {};
  const myRequest = {
    url: url,
    headers: headers,
  };
  await $.http.post(myRequest).then(
    (response) => {
      const body = JSON.parse(response.body);
      if (body.code == 0 && body.message == "success") {
        console.log("- 浏览追番频道任务成功,获得10点大积分");
        return true;
      } else {
        console.log("- 浏览追番频道任务失败");
        console.log("- 失败原因 " + body.message);
        return false;
      }
    },
    (reason) => {
      console.log("- 浏览追番频道任务失败");
      console.log(`- headers ${JSON.stringify(response.headers)}`);
      return false;
    },
  );
}

async function vipScoreMovie() {
  console.log("#### 大会员浏览影视频道10s任务");
  let url = `https://api.bilibili.com/pgc/activity/deliver/task/complete?access_key=${config.key}&position=tv_channel&sign=09ece1c295cb86d74778b93c59c0da3a&task_sign=B7DA5FAE25C39F53C62C03076CF2878B`;
  let headers = {};
  const myRequest = {
    url: url,
    headers: headers,
  };
  await $.http.post(myRequest).then(
    (response) => {
      const body = JSON.parse(response.body);
      if (body.code == 0 && body.message == "success") {
        console.log("- 浏览影视频道任务成功,获得10点大积分");
        return true;
      } else {
        console.log("- 浏览影视频道任务失败");
        console.log("- 失败原因 " + body.message);
        return false;
      }
    },
    (reason) => {
      console.log("- 浏览影视频道任务失败");
      console.log(`- headers ${JSON.stringify(response.headers)}`);
      return false;
    },
  );
}

async function vipWatchAccept() {
  console.log("#### 接取大会员观看正片30min任务");
  let url = `https://api.bilibili.com/pgc/activity/score/task/receive`;
  let headers = {
    "Content-Type": `application/json`,
    Cookie: `SESSDATA=${config.cookie.SESSDATA}`,
    Referer: `https://big.bilibili.com/mobile/bigPoint/task`,
  };
  let body = `{"taskCode":"ogvwatch"}`;
  const myRequest = {
    url: url,
    headers: headers,
    body: body,
  };
  await $.http.post(myRequest).then(
    (response) => {
      const body = JSON.parse(response.body);
      if (body.code == 0 && body.message == "success") {
        console.log("- 大会员观看正片任务接取成功, 自行观看完成后积分自动到账");
        return true;
      } else {
        console.log("- 大会员观看正片任务接取失败");
        console.log("- 失败原因 " + body.message);
        return false;
      }
    },
    (reason) => {
      console.log("- 大会员观看正片任务接取失败");
      console.log(`- headers ${JSON.stringify(response.headers)}`);
      return false;
    },
  );
}

async function me() {
  console.log("#### 用户信息");
  const url = "https://api.bilibili.com/x/web-interface/nav";
  const headers = {
    cookie: `DedeUserID=${config.cookie.DedeUserID}; DedeUserID__ckMd5=${config.cookie.DedeUserID__ckMd5}; SESSDATA=${config.cookie.SESSDATA}; bili_jct=${config.cookie.bili_jct}; sid=${config.cookie.sid}`,
  };
  const myRequest = {
    url: url,
    headers: headers,
  };

  return await $.http.get(myRequest).then(
    (response) => {
      const body = JSON.parse(response.body);

      if (body.code) {
        console.log("- 获得用户信息失败(请更新cookie)");

        $.setdata(null, name + "_user");
        return false;
      } else {
        console.log("- cookie有效即将开始任务");
        // Always update exp/coin info
        config.user.level_info = body.data.level_info;
        config.user.wallet = body.data.wallet;
        config.user.money = body.data.money;
        if (check("user") || config.user.mid != body.data.mid) {
          config.user = body.data;
          config.user.time = format(startTime);
          config.score.num = 0;
          $.setdata(JSON.stringify(config.score), name + "_score");
          config.user.num = 1;
        } else {
          config.user.num = (config.user.num || 0) + 1;
        }
        $.setdata(JSON.stringify(config.user), name + "_user");

        config.user.mext_exp =
          config.user.level_info.next_exp - config.user.level_info.current_exp;
        config.user.next_day = Math.ceil(config.user.mext_exp / 10);
        config.user.v6_exp = 28800 - config.user.level_info.current_exp;
        config.user.v6_day = Math.ceil(config.user.v6_exp / 10);

        if (config.user.vipStatus == 1) {
          console.log("- 🎉🎉尊贵的大会员用户🎉🎉");
        }
        console.log("- 用户名称: " + config.user.uname);
        console.log("- 用户ID: " + config.user.mid);
        console.log("- 用户硬币: " + config.user.money);
        console.log("- 用户B币: " + config.user.wallet.bcoin_balance);
        console.log("- 用户等级: " + config.user.level_info.current_level);
        console.log(
          `- 当前经验:${config.user.level_info.current_exp}/${config.user.level_info.next_exp}`,
        );

        console.log(`- 升级还需经验: ${config.user.mext_exp}`);
        console.log(`- 距离下级还需: ${config.user.next_day}天(登录+5 观看+5)`);
        console.log(
          `- 距离满级(6级)还需: ${config.user.v6_day}天(登录+5 观看+5)`,
        );
        console.log(`- 剩余硬币最多可投: ${config.user.money / 5} 天`);
        return true;
      }
    },
    (reason) => {
      $notify(name, "- 获得用户信息失败", reason.error);
      return false;
    },
  );
}

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? { url: t } : t;
      let s = this.get;
      return (
        "POST" === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.encoding = "utf-8"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    isStash() {
      return (
        "undefined" != typeof $environment && $environment["stash-version"]
      );
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise((e) => {
        this.get({ url: t }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise((s) => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, n] = i.split("@"),
          a = {
            url: `http://${n}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: "cron", timeout: r },
            headers: { "X-Key": o, Accept: "*/*" },
          };
        this.post(a, (t, e, i) => s(i));
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(e, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t,
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          n = i ? ("null" === o ? null : o || "{}") : "{}";
        try {
          const e = JSON.parse(n);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()),
          (this.data[e] = t),
          this.writedata(),
          !0)
        : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require("got")),
        (this.cktough = this.cktough ? this.cktough : require("tough-cookie")),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (
        (t.headers &&
          (delete t.headers["Content-Type"],
          delete t.headers["Content-Length"]),
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient.get(t, (t, s, i) => {
            !t &&
              s &&
              ((s.body = i),
              (s.statusCode = s.status ? s.status : s.statusCode),
              (s.status = s.statusCode)),
              e(t, s, i);
          });
      else if (this.isQuanX())
        this.isNeedRewrite &&
          ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => e((t && t.error) || "UndefinedError"),
          );
      else if (this.isNode()) {
        let s = require("iconv-lite");
        this.initGotEnv(t),
          this.got(t)
            .on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"]
                    .map(this.cktough.Cookie.parse)
                    .toString();
                  s && this.ckjar.setCookieSync(s, null),
                    (e.cookieJar = this.ckjar);
                }
              } catch (t) {
                this.logErr(t);
              }
            })
            .then(
              (t) => {
                const {
                    statusCode: i,
                    statusCode: r,
                    headers: o,
                    rawBody: n,
                  } = t,
                  a = s.decode(n, this.encoding);
                e(
                  null,
                  { status: i, statusCode: r, headers: o, rawBody: n, body: a },
                  a,
                );
              },
              (t) => {
                const { message: i, response: r } = t;
                e(i, r, r && s.decode(r.rawBody, this.encoding));
              },
            );
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          (t.headers["Content-Type"] = "application/x-www-form-urlencoded"),
        t.headers && delete t.headers["Content-Length"],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient[s](t, (t, s, i) => {
            !t &&
              s &&
              ((s.body = i),
              (s.statusCode = s.status ? s.status : s.statusCode),
              (s.status = s.statusCode)),
              e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = s),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => e((t && t.error) || "UndefinedError"),
          );
      else if (this.isNode()) {
        let i = require("iconv-lite");
        this.initGotEnv(t);
        const { url: r, ...o } = t;
        this.got[s](r, o).then(
          (t) => {
            const { statusCode: s, statusCode: r, headers: o, rawBody: n } = t,
              a = i.decode(n, this.encoding);
            e(
              null,
              { status: s, statusCode: r, headers: o, rawBody: n, body: a },
              a,
            );
          },
          (t) => {
            const { message: s, response: r } = t;
            e(s, r, r && i.decode(r.rawBody, this.encoding));
          },
        );
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds(),
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (s.getFullYear() + "").substr(4 - RegExp.$1.length),
        ));
      for (let e in i)
        new RegExp("(" + e + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ("00" + i[e]).substr(("" + i[e]).length),
          ));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i &&
          "" !== i &&
          ("object" == typeof i && (i = JSON.stringify(i)),
          (e += `${s}=${i}&`));
      }
      return (e = e.substring(0, e.length - 1)), e;
    }
    msg(e = t, s = "", i = "", r) {
      const o = (t) => {
        if (!t) return t;
        if ("string" == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
            ? { "open-url": t }
            : this.isSurge()
            ? { url: t }
            : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return { openUrl: e, mediaUrl: s };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl,
              i = t["update-pasteboard"] || t.updatePasteboard;
            return { "open-url": e, "media-url": s, "update-pasteboard": i };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return { url: e };
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(e, s, i, o(r));
        } else if (this.isQuanX()) {
          $notify(e, s, i, o(r));
        }
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log("", `❗️${this.name}, 错误!`, t.stack)
        : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`),
        this.log(),
        this.isSurge() || this.isQuanX() || this.isLoon()
          ? $done(t)
          : this.isNode() && process.exit(1);
    }
  })(t, e);
}
