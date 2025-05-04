// Source: https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/bilibili_json.js
// author: @ddgksf2013
// Update: 2025-03-31

const version = "V2.0.122";

let body = $response.body;
if (body) {
  switch (!0) {
    case /pgc\/season\/app\/related\/recommend\?/.test($request.url):
      try {
        let a = JSON.parse(body);
        a.result?.cards?.length &&
          (a.result.cards = a.result.cards.filter((a) => 2 != a.type)),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili recommend:` + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        delete a.data?.common_equip, (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili skin:` + a);
      }
      break;
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body),
          b = [];
        for (let c of a.data.items)
          if (c.hasOwnProperty("banner_item")) continue;
          else if (
            !c.hasOwnProperty("ad_info") &&
            -1 === c.card_goto?.indexOf("ad") &&
            [
              "small_cover_v2",
              "large_cover_v1",
              "large_cover_single_v9",
            ].includes(c.card_type)
          )
            b.push(c);
          else continue;
        (a.data.items = b), (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili index:` + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\/story\?/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body),
          b = [];
        for (let c of a.data.items)
          c.hasOwnProperty("ad_info") ||
            -1 !== c.card_goto.indexOf("ad") ||
            b.push(c);
        (a.data.items = b), (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili Story:` + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v\d\/account\/teenagers\/status\?/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        (a.data.teenagers_status = 0), (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili teenagers:` + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(
      $request.url,
    ):
      try {
        const a = new Set([177, 178, 179, 181, 102, 104, 106, 486, 488, 489]);
        let b = JSON.parse(body);
        if (b.data?.tab) {
          var dataTab = [];
          dataTab.push(
            {
              id: 39,
              name: "\u76F4\u64AD",
              uri: "bilibili://live/home",
              tab_id: "\u76F4\u64ADtab",
              pos: 1,
            },
            {
              id: 40,
              name: "\u63A8\u8350",
              uri: "bilibili://pegasus/promo",
              tab_id: "\u63A8\u8350tab",
              pos: 2,
              default_selected: 1,
            },
          ),
            -1 == JSON.stringify(b.data.tab).indexOf("pgc/bangumi_v2")
              ? dataTab.push({
                  id: 545,
                  name: "\u52A8\u753B",
                  uri: "bilibili://pgc/home",
                  tab_id: "bangumi",
                  pos: 3,
                })
              : dataTab.push({
                  id: 3502,
                  name: "\u756A\u5267",
                  uri: "bilibili://pgc/bangumi_v2",
                  tab_id: "bangumi",
                  pos: 3,
                }),
            dataTab.push(
              {
                id: 41,
                name: "\u70ED\u95E8",
                uri: "bilibili://pegasus/hottopic",
                tab_id: "hottopic",
                pos: 4,
              },
              {
                id: 151,
                name: "\u5F71\u89C6",
                uri: "bilibili://pgc/cinema-tab",
                tab_id: "film",
                pos: 5,
              },
            ),
            (b.data.tab = dataTab);
        }
        if (
          (b.data.top &&
            (b.data.top = [
              {
                id: 481,
                icon: "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
                name: "\u6D88\u606F",
                uri: "bilibili://link/im_home",
                tab_id: "\u6D88\u606FTop",
                pos: 1,
              },
            ]),
          b.data.bottom)
        ) {
          let c = b.data.bottom.filter((b) => a.has(b.id));
          b.data.bottom = c;
        }
        body = JSON.stringify(b);
      } catch (a) {
        console.log(`bilibili tabprocess:` + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        const b = new Set([
          396, 397, 398, 399, 407, 410, 402, 404, 425, 426, 427, 428, 430, 432,
          433, 434, 494, 495, 496, 497, 500, 501, 2830, 3072, 3084,
        ]);
        a.data.sections_v2.forEach((c, d) => {
          let e = c.items.filter((a) => b.has(a.id));
          (a.data.sections_v2[d].items = e),
            (a.data.sections_v2[d].button = {}),
            delete a.data.sections_v2[d].be_up_title,
            delete a.data.sections_v2[d].tip_icon,
            delete a.data.sections_v2[d].tip_title,
            ("\u521B\u4F5C\u4E2D\u5FC3" == a.data.sections_v2[d].title ||
              "\u5275\u4F5C\u4E2D\u5FC3" == a.data.sections_v2[d].title) &&
              (delete a.data.sections_v2[d].title,
              delete a.data.sections_v2[d].type);
        }),
          delete a.data.vip_section_v2,
          delete a.data.vip_section,
          a.data.hasOwnProperty("live_tip") && (a.data.live_tip = {}),
          a.data.hasOwnProperty("answer") && (a.data.answer = {}),
          a.data.vip.status ||
            ((a.data.vip_type = 2),
            (a.data.vip.type = 2),
            (a.data.vip.status = 1),
            (a.data.vip.vip_pay_type = 1),
            (a.data.vip.due_date = 466982416e4)),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili mypage:` + a);
      }
      break;
    case /^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        (a.data.activity_banner_info = null),
          a.data?.shopping_info && (a.data.shopping_info = { is_show: 0 }),
          a.data?.new_tab_info?.outer_list &&
            a.data.new_tab_info.outer_list.length &&
            (a.data.new_tab_info.outer_list =
              a.data.new_tab_info.outer_list.filter((a) => 33 != a.biz_id)),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili live broadcast:` + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        a.data && ((a.data.hash = "ddgksf2013"), (a.data.online.icon = "")),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili right corner:` + a);
      }
      break;
    case /ecommerce-user\/get_shopping_info\?/.test($request.url):
      try {
        let a = JSON.parse(body);
        a.data &&
          (a.data = {
            shopping_card_detail: {},
            bubbles_detail: {},
            recommend_card_detail: {},
            selected_goods: {},
            h5jump_popup: [],
          }),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili shopping info:` + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        (a.data = {
          type: "history",
          title: "\u641C\u7D22\u5386\u53F2",
          search_hotword_revision: 2,
        }),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili hot search:` + a);
      }
      break;
    case /https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        a.data.vip.status ||
          ((a.data.vip.type = 2),
          (a.data.vip.status = 1),
          (a.data.vip.vip_pay_type = 1),
          (a.data.vip.due_date = 466982416e4)),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili 1080p:` + a);
      }
      break;
    case /pgc\/page\/(bangumi|cinema\/tab\?)/.test($request.url):
      try {
        let a = JSON.parse(body);
        a.result.modules.forEach((a) => {
          a.style.startsWith("banner") &&
            (a.items = a.items.filter((a) => -1 != a.link.indexOf("play"))),
            a.style.startsWith("function") &&
              ((a.items = a.items.filter(
                (a) => -1 == a.blink.indexOf("bilibili.com"),
              )),
              [1283, 241, 1441, 1284].includes(a.module_id) && (a.items = [])),
            a.style.startsWith("tip") && (a.items = []);
        }),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili fanju:` + a);
      }
      break;
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        if (a.data && a.data.list)
          for (let b of a.data.list)
            (b.duration = 0),
              (b.begin_time = 2240150400),
              (b.end_time = 2240150400);
        body = JSON.stringify(a);
      } catch (a) {
        console.log(`bilibili openad:` + a);
      }
      break;
    case /^https:\/\/api\.live\.bilibili\.com\/xlive\/app-interface\/v2\/index\/feed/.test(
      $request.url,
    ):
      try {
        let a = JSON.parse(body);
        a.data &&
          a.data.card_list &&
          (a.data.card_list = a.data.card_list.filter(
            (a) => "banner_v1" != a.card_type,
          )),
          (body = JSON.stringify(a));
      } catch (a) {
        console.log(`bilibili xlive:` + a);
      }
      break;
    default:
      $done({});
  }
  $done({ body });
} else $done({});
