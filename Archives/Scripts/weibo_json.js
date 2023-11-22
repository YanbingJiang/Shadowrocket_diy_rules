// SOURCE: https://raw.githubusercontent.com/ddgksf2013/Scripts/master/weibo_json.js
// Author: @ddgksf2013 @Zmqcherish
// Update: 2023-09-28

const version = "V2.0.120";

const mainConfig = {
    isDebug: !1,
    author: "ddgksf2013",
    removeHomeVip: !0,
    removeHomeCreatorTask: !0,
    removeRelate: !0,
    removeGood: !0,
    removeFollow: !0,
    modifyMenus: !0,
    removeRelateItem: !1,
    removeRecommendItem: !0,
    removeRewardItem: !0,
    removeLiveMedia: !0,
    removeNextVideo: !1,
    removePinedTrending: !0,
    removeInterestFriendInTopic: !1,
    removeInterestTopic: !1,
    removeInterestUser: !0,
    removeLvZhou: !0,
    removeSearchWindow: !0,
    profileSkin1: null,
    profileSkin2: null,
    tabIconVersion: 0,
    tabIconPath: "",
  },
  itemMenusConfig = {
    creator_task: !1,
    mblog_menus_custom: !1,
    mblog_menus_video_later: !0,
    mblog_menus_comment_manager: !0,
    mblog_menus_avatar_widget: !1,
    mblog_menus_card_bg: !1,
    mblog_menus_long_picture: !0,
    mblog_menus_delete: !0,
    mblog_menus_edit: !0,
    mblog_menus_edit_history: !0,
    mblog_menus_edit_video: !0,
    mblog_menus_sticking: !0,
    mblog_menus_open_reward: !0,
    mblog_menus_novelty: !1,
    mblog_menus_favorite: !0,
    mblog_menus_promote: !0,
    mblog_menus_modify_visible: !0,
    mblog_menus_copy_url: !0,
    mblog_menus_follow: !0,
    mblog_menus_video_feedback: !0,
    mblog_menus_shield: !0,
    mblog_menus_report: !0,
    mblog_menus_apeal: !0,
    mblog_menus_home: !0,
  },
  modifyCardsUrls = ["/cardlist", "video/community_tab", "/searchall"],
  modifyStatusesUrls = [
    "statuses/friends/timeline",
    "statuses_unread_hot_timeline",
    "statuses/unread_friends_timeline",
    "statuses/unread_hot_timeline",
    "groups/timeline",
    "statuses/friends_timeline",
  ],
  otherUrls = {
    "/profile/me": "removeHome",
    "/statuses/extend": "itemExtendHandler",
    "/video/remind_info": "removeVideoRemind",
    "/checkin/show": "removeCheckin",
    "/live/media_homelist": "removeMediaHomelist",
    "/comments/build_comments": "removeComments",
    "/container/get_item": "containerHandler",
    "/profile/container_timeline": "userHandler",
    "/video/tiny_stream_video_list": "nextVideoHandler",
    "/2/statuses/video_mixtimeline": "nextVideoHandler",
    "video/tiny_stream_mid_detail": "nextVideoHandler",
    "/!/client/light_skin": "tabSkinHandler",
    "/littleskin/preview": "skinPreviewHandler",
    "/search/finder": "removeSearchMain",
    "/search/container_timeline": "removeSearch",
    "/search/container_discover": "removeSearch",
    "/2/messageflow": "removeMsgAd",
    "/2/page?": "removePage",
    "/statuses/unread_topic_timeline": "topicHandler",
    "/square&pageDataType/": "squareHandler",
    "/statuses/container_timeline_topic": "removeMain",
    "/statuses/container_timeline": "removeMainTab",
    "wbapplua/wbpullad.lua": "removeLuaScreenAds",
    "interface/sdk/sdkad.php": "removePhpScreenAds",
    "ct=feed&a=trends": "removeTopics",
    user_center: "modifiedUserCenter",
    "a=get_coopen_ads": "removeIntlOpenAds",
    "php?a=search_topic": "removeSearchTopic",
    "v1/ad/realtime": "removeRealtimeAd",
    "v1/ad/preload": "removeAdPreload",
    "php?a=open_app": "removeAdBanner",
    "groups/allgroups": "removeGroup",
  };
function getModifyMethod(e) {
  for (let t of modifyCardsUrls) if (e.indexOf(t) > -1) return "removeCards";
  for (let o of modifyStatusesUrls)
    if (e.indexOf(o) > -1) return "removeTimeLine";
  for (let [i, a] of Object.entries(otherUrls)) if (e.indexOf(i) > -1) return a;
  return null;
}
function removeRealtimeAd(e) {
  return delete e.ads, (e.code = 4016), e;
}
function removeGroup(e) {
  return (
    e.pageDatas &&
      (e.pageDatas = Object.values(e.pageDatas).filter(
        (e) => "homeExtend" != e.pageDataType,
      )),
    e
  );
}
function removeAdBanner(e) {
  return (
    e.data.close_ad_setting && delete e.data.close_ad_setting,
    e.data.detail_banner_ad && (e.data.detail_banner_ad = []),
    e
  );
}
function removeAdPreload(e) {
  if (!e.ads) return e;
  for (let t of ((e.last_ad_show_interval = 86400), e.ads))
    (t.start_time = 2681574400),
      (t.end_time = 2681660799),
      (t.display_duration = 0),
      (t.daily_display_cnt = 0),
      (t.total_display_cnt = 0);
  return e;
}
function removeIntlOpenAds(e) {
  return (
    e.data &&
      0 !== e.data.length &&
      ((e.data.ad_list = []),
      (e.data.gdt_video_ad_ios = []),
      (e.data.display_ad = 0),
      (e.data.ad_ios_id = null),
      (e.data.app_ad_ios_id = null),
      (e.data.reserve_ad_ios_id = ""),
      (e.data.reserve_app_ad_ios_id = ""),
      (e.data.ad_duration = 604800),
      (e.data.ad_cd_interval = 604800),
      (e.data.pic_ad = [])),
    e
  );
}
function removeSearchTopic(e) {
  return (
    e.data &&
      0 !== e.data.length &&
      (e.data = Object.values(e.data).filter((e) => "searchtop" != e.type)),
    e
  );
}
function modifiedUserCenter(e) {
  return (
    e.data &&
      0 !== e.data.length &&
      e.data.cards &&
      (e.data.cards = Object.values(e.data.cards).filter(
        (e) => "personal_vip" != e.items[0].type,
      )),
    e
  );
}
function removeTopics(e) {
  return e.data && (e.data.order = ["search_topic"]), e;
}
function isAd(e) {
  return (
    !!e &&
    ("广告" == e.mblogtypename ||
      "热推" == e.mblogtypename ||
      e.promotion?.type == "ad" ||
      e.page_info?.actionlog?.source == "ad" ||
      e.content_auth_info?.content_auth_title == "广告")
  );
}
function squareHandler(e) {
  return e.items, e;
}
function removeMainTab(e) {
  if (
    (e.loadedInfo && e.loadedInfo.headers && delete e.loadedInfo.headers,
    !e.items)
  )
    return e;
  let t = [];
  for (let o of e.items)
    isAd(o.data) ||
      (o.data?.page_info?.video_limit && delete o.data.page_info.video_limit,
      o.data?.common_struct && delete o.data.common_struct,
      o.category
        ? "group" != o.category
          ? t.push(o)
          : -1 != JSON.stringify(o.items).indexOf("profile_top") && t.push(o)
        : t.push(o));
  return (e.items = t), log("removeMainTab success"), e;
}
function removeMain(e) {
  if (
    (e.loadedInfo && e.loadedInfo.headers && delete e.loadedInfo.headers,
    !e.items)
  )
    return e;
  let t = [];
  for (let o of e.items)
    if ("feed" == o.category) isAd(o.data) || t.push(o);
    else if ("group" == o.category) {
      if (
        o.items.length > 0 &&
        o.items[0].data?.itemid?.includes("search_input")
      )
        (o.items = o.items.filter(
          (e) =>
            e?.data?.itemid?.includes("mine_topics") ||
            e?.data?.itemid?.includes("search_input") ||
            e?.data?.card_type == 202,
        )),
          (o.items[0].data.hotwords = [{ word: "搜索超话", tip: "" }]),
          t.push(o);
      else {
        if (
          o.items.length > 0 &&
          o.items[0].data?.itemid?.includes("top_title")
        )
          continue;
        o.items.length > 0 &&
          (o.items = Object.values(o.items).filter(
            (e) => "feed" == e.category || "card" == e.category,
          )),
          t.push(o);
      }
    } else {
      if (o.data?.card_type && [202, 200].indexOf(o.data.card_type) > -1)
        continue;
      t.push(o);
    }
  return (e.items = t), log("removeMain success"), e;
}
function topicHandler(e) {
  let t = e.cards;
  if (!t || (!mainConfig.removeUnfollowTopic && !mainConfig.removeUnusedPart))
    return e;
  let o = [];
  for (let i of t) {
    let a = !0;
    if (i.mblog) {
      let r = i.mblog.buttons;
      mainConfig.removeUnfollowTopic && r && "follow" == r[0].type && (a = !1);
    } else {
      if (!mainConfig.removeUnusedPart) continue;
      if ("bottom_mix_activity" == i.itemid) a = !1;
      else if (i?.top?.title == "正在活跃") a = !1;
      else if (200 == i.card_type && i.group) a = !1;
      else {
        let n = i.card_group;
        if (!n) continue;
        if (
          [
            "guess_like_title",
            "cats_top_title",
            "chaohua_home_readpost_samecity_title",
          ].indexOf(n[0].itemid) > -1
        )
          a = !1;
        else if (n.length > 1) {
          let d = [];
          for (let s of n)
            -1 ==
              ["chaohua_discovery_banner_1", "bottom_mix_activity"].indexOf(
                s.itemid,
              ) && d.push(s);
          i.card_group = d;
        }
      }
    }
    a && o.push(i);
  }
  return (e.cards = o), log("topicHandler success"), e;
}
function removeSearchMain(e) {
  let t = e.channelInfo.channels;
  if (!t) return e;
  let o = [];
  for (let i of t) i.payload && (removeSearch(i.payload), o.push(i));
  return (e.channelInfo.channels = o), log("remove_search main success"), e;
}
function checkSearchWindow(e) {
  return (
    !!mainConfig.removeSearchWindow &&
    "card" == e.category &&
    (e.data?.itemid == "finder_window" ||
      e.data?.itemid == "more_frame" ||
      e.data?.card_type == 208 ||
      e.data?.card_type == 217 ||
      e.data?.card_type == 101 ||
      e.data?.card_type == 19 ||
      e.data?.mblog?.page_info?.actionlog?.source?.includes("ad"))
  );
}
function removeSearch(e) {
  if (!e.items) return e;
  let t = [];
  for (let o of e.items)
    "feed" == o.category
      ? isAd(o.data) ||
        (o.data?.page_info?.video_limit && delete o.data.page_info.video_limit,
        t.push(o))
      : "group" == o.category
      ? ((o.items = o.items.filter((e) => e.data?.card_type === 17)),
        o.items.length > 0 && t.push(o))
      : checkSearchWindow(o) || t.push(o);
  return (
    (e.items = t),
    e.loadedInfo &&
      ((e.loadedInfo.searchBarContent = []),
      e.loadedInfo.headerBack &&
        (e.loadedInfo.headerBack.channelStyleMap = {})),
    log("remove_search success"),
    e
  );
}
function removeMsgAd(e) {
  if (!e.messages) return;
  let t = [];
  for (let o of e.messages) !o.msg_card?.ad_tag && t.push(o);
  return (e.messages = t), e;
}
function removePage(e) {
  return (
    removeCards(e),
    mainConfig.removePinedTrending &&
      e.cards &&
      e.cards.length > 0 &&
      e.cards[0].card_group &&
      (e.cards[0].card_group = e.cards[0].card_group.filter(
        (e) =>
          !(
            e?.actionlog?.ext?.includes("ads_word") ||
            e?.itemid?.includes("t:51") ||
            e?.itemid?.includes("ads_word")
          ),
      )),
    e
  );
}
function removeCards(e) {
  if ((e.hotwords && (e.hotwords = []), !e.cards)) return;
  let t = [];
  for (let o of e.cards) {
    e.cardlistInfo?.containerid == "232082type=1" &&
      (17 == o.card_type || 58 == o.card_type || 11 == o.card_type) &&
      (o = { card_type: o.card_type + 1 });
    let i = o.card_group;
    if (i && i.length > 0) {
      let a = [];
      for (let r of i)
        118 == r.card_type ||
          isAd(r.mblog) ||
          -1 != JSON.stringify(r).indexOf("res_from:ads") ||
          a.push(r);
      (o.card_group = a), t.push(o);
    } else {
      let n = o.card_type;
      if ([9, 165].indexOf(n) > -1) isAd(o.mblog) || t.push(o);
      else {
        if ([1007, 180].indexOf(n) > -1) continue;
        t.push(o);
      }
    }
  }
  e.cards = t;
}
function lvZhouHandler(e) {
  if (!mainConfig.removeLvZhou || !e) return;
  let t = e.common_struct;
  if (!t) return;
  let o = [];
  for (let i of t) "绿洲" != i.name && o.push(i);
  e.common_struct = o;
}
function isBlock(e) {
  let t = mainConfig.blockIds || [];
  if (0 === t.length) return !1;
  let o = e.user.id;
  for (let i of t) if (i == o) return !0;
  return !1;
}
function removeTimeLine(e) {
  for (let t of ["ad", "advertises", "trends", "headers"]) e[t] && delete e[t];
  if (!e.statuses) return;
  let o = [];
  for (let i of e.statuses)
    isAd(i) ||
      (lvZhouHandler(i),
      i.common_struct && delete i.common_struct,
      i.category ? "group" != i.category && o.push(i) : o.push(i));
  e.statuses = o;
}
function removeHomeVip(e) {
  return e.header && e.header.vipView && (e.header.vipView = null), e;
}
function removeVideoRemind(e) {
  (e.bubble_dismiss_time = 0),
    (e.exist_remind = !1),
    (e.image_dismiss_time = 0),
    (e.image = ""),
    (e.tag_image_english = ""),
    (e.tag_image_english_dark = ""),
    (e.tag_image_normal = ""),
    (e.tag_image_normal_dark = "");
}
function itemExtendHandler(e) {
  if (
    (mainConfig.removeRelate || mainConfig.removeGood) &&
    e.trend &&
    e.trend.titles
  ) {
    let t = e.trend.titles.title;
    mainConfig.removeRelate && "相关推荐" === t
      ? delete e.trend
      : mainConfig.removeGood && "博主好物种草" === t && delete e.trend;
  }
  mainConfig.removeFollow && e.follow_data && (e.follow_data = null),
    mainConfig.removeRewardItem && e.reward_info && (e.reward_info = null),
    e.head_cards && delete e.head_cards,
    e.page_alerts && (e.page_alerts = null);
  try {
    e.trend.extra_struct.extBtnInfo.btn_picurl.indexOf(
      "timeline_icon_ad_delete",
    ) > -1 && delete e.trend;
  } catch (o) {}
  if (mainConfig.modifyMenus && e.custom_action_list) {
    let i = [];
    for (let a of e.custom_action_list) {
      let r = a.type,
        n = itemMenusConfig[r];
      void 0 === n
        ? i.push(a)
        : "mblog_menus_copy_url" === r
        ? i.unshift(a)
        : n && i.push(a);
    }
    e.custom_action_list = i;
  }
}
function updateFollowOrder(e) {
  try {
    for (let t of e.items)
      if ("mainnums_friends" === t.itemId) {
        let o = t.click.modules[0].scheme;
        (t.click.modules[0].scheme = o.replace(
          "231093_-_selfrecomm",
          "231093_-_selffollowed",
        )),
          log("updateFollowOrder success");
        return;
      }
  } catch (i) {
    console.log("updateFollowOrder fail");
  }
}
function updateProfileSkin(e, t) {
  try {
    let o = mainConfig[t];
    if (!o) return;
    let i = 0;
    for (let a of e.items)
      if (a.image)
        try {
          (dm = a.image.style.darkMode),
            "alpha" != dm && (a.image.style.darkMode = "alpha"),
            (a.image.iconUrl = o[i++]),
            a.dot && (a.dot = []);
        } catch (r) {}
    log("updateProfileSkin success");
  } catch (n) {
    console.log("updateProfileSkin fail");
  }
}
function removeHome(e) {
  if (!e.items) return e;
  let t = [];
  for (let o of e.items) {
    let i = o.itemId;
    if ("profileme_mine" == i)
      mainConfig.removeHomeVip && (o = removeHomeVip(o)),
        o.header?.vipIcon && delete o.header.vipIcon,
        updateFollowOrder(o),
        t.push(o);
    else if ("100505_-_top8" == i)
      updateProfileSkin(o, "profileSkin1"), t.push(o);
    else if ("100505_-_newcreator" == i)
      "grid" == o.type
        ? (updateProfileSkin(o, "profileSkin2"), t.push(o))
        : mainConfig.removeHomeCreatorTask || t.push(o);
    else {
      if (
        "100505_-_chaohua" != i &&
        "100505_-_manage" != i &&
        "100505_-_recentlyuser" != i
      )
        continue;
      o.images?.length > 0 &&
        (o.images = o.images.filter(
          (e) =>
            "100505_-_chaohua" == e.itemId ||
            "100505_-_recentlyuser" == e.itemId,
        )),
        t.push(o);
    }
  }
  return (e.items = t), e;
}
function removeCheckin(e) {
  log("remove tab1签到"), (e.show = 0);
}
function removeMediaHomelist(e) {
  mainConfig.removeLiveMedia && (log("remove 首页直播"), (e.data = {}));
}
function removeComments(e) {
  let t = ["广告", "廣告", "相关内容", "推荐", "热推", "推薦"],
    o = e.datas || [];
  if (0 === o.length) return;
  let i = [];
  for (let a of o) {
    let r = a.adType || "";
    -1 == t.indexOf(r) && 6 != a.type && i.push(a);
  }
  log("remove 评论区相关和推荐内容"),
    (e.datas = i),
    e.tip_msg && delete e.tip_msg;
}
function containerHandler(e) {
  mainConfig.removeInterestFriendInTopic &&
    "超话里的好友" === e.card_type_name &&
    (log("remove 超话里的好友"), (e.card_group = [])),
    mainConfig.removeInterestTopic &&
      e.itemid &&
      (e.itemid.indexOf("infeed_may_interest_in") > -1
        ? (log("remove 感兴趣的超话"), (e.card_group = []))
        : e.itemid.indexOf("infeed_friends_recommend") > -1 &&
          (log("remove 超话好友关注"), (e.card_group = [])));
}
function userHandler(e) {
  if (((e = removeMainTab(e)), !mainConfig.removeInterestUser || !e.items))
    return e;
  let t = [];
  for (let o of e.items) {
    let i = !0;
    if ("group" == o.category)
      try {
        "可能感兴趣的人" == o.items[0].data.desc && (i = !1);
      } catch (a) {}
    i && (o.data?.common_struct && delete o.data.common_struct, t.push(o));
  }
  return (e.items = t), log("removeMain sub success"), e;
}
function nextVideoHandler(e) {
  if (!e.statuses) return e;
  let t = [];
  for (let o of e.statuses)
    if (!isAd(o)) {
      let i = ["forward_redpacket_info", "shopping", "float_info", "tags"];
      for (let a of i) o.video_info?.[a] && delete o.video_info[a];
      t.push(o);
    }
  return (e.statuses = t), log("removeMainTab Success"), e;
}
function tabSkinHandler(e) {
  try {
    let t = mainConfig.tabIconVersion;
    if (((e.data.canUse = 1), !t || !mainConfig.tabIconPath || t < 100)) return;
    let o = e.data.list;
    for (let i of o) (i.version = t), (i.downloadlink = mainConfig.tabIconPath);
    log("tabSkinHandler success");
  } catch (a) {
    log("tabSkinHandler fail");
  }
}
function skinPreviewHandler(e) {
  e.data.skin_info.status = 1;
}
function removeLuaScreenAds(e) {
  if (!e.cached_ad) return e;
  for (let t of e.cached_ad.ads)
    (t.start_date = 1893254400),
      (t.show_count = 0),
      (t.duration = 0),
      (t.end_date = 1893340799);
  return e;
}
function removePhpScreenAds(e) {
  if (!e.ads) return e;
  for (let t of ((e.show_push_splash_ad = !1),
  (e.background_delay_display_time = 0),
  (e.lastAdShow_delay_display_time = 0),
  (e.realtime_ad_video_stall_time = 0),
  (e.realtime_ad_timeout_duration = 0),
  e.ads))
    (t.displaytime = 0),
      (t.displayintervel = 86400),
      (t.allowdaydisplaynum = 0),
      (t.displaynum = 0),
      (t.displaytime = 1),
      (t.begintime = "2029-12-30 00:00:00"),
      (t.endtime = "2029-12-30 23:59:59");
  return e;
}
function log(e) {
  mainConfig.isDebug && console.log(e);
}
var body = $response.body,
  url = $request.url;
let method = getModifyMethod(url);
if (method) {
  log(method);
  var func = eval(method);
  let data = JSON.parse(body.match(/\{.*\}/)[0]);
  new func(data),
    (body = JSON.stringify(data)),
    "removePhpScreenAds" == method && (body = JSON.stringify(data) + "OK");
}
$done({ body });
