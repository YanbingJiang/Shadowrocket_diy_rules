// SOURCE: https://raw.githubusercontent.com/ddgksf2013/Scripts/master/weibo_json.js
// Author: @ddgksf2013 @Zmqcherish
// Update: 2025-01-26

const version = "V2.0.136";

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
  modifyCardsUrls = ["/cardlist", "video/community_tab", "searchall"],
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
    "a=trends": "removeTopics",
    user_center: "modifiedUserCenter",
    "a=get_coopen_ads": "removeIntlOpenAds",
    "php?a=search_topic": "removeSearchTopic",
    "ad/realtime": "removeRealtimeAd",
    "ad/preload": "removeAdPreload",
    "php?a=open_app": "removeAdBanner",
  };
function getModifyMethod(a) {
  for (const b of modifyCardsUrls) if (-1 < a.indexOf(b)) return "removeCards";
  for (const b of modifyStatusesUrls)
    if (-1 < a.indexOf(b)) return "removeTimeLine";
  for (const [b, c] of Object.entries(otherUrls))
    if (-1 < a.indexOf(b)) return c;
  return null;
}
function removeRealtimeAd(a) {
  return delete a.ads, (a.code = 4016), a;
}
function removeAdBanner(a) {
  return (
    a.data.close_ad_setting && delete a.data.close_ad_setting,
    a.data.detail_banner_ad && (a.data.detail_banner_ad = []),
    a
  );
}
function removeAdPreload(a) {
  if (!a.ads) return a;
  a.last_ad_show_interval = 86400;
  for (let b of a.ads)
    (b.start_time = 2681574400),
      (b.end_time = 2681660799),
      (b.display_duration = 0),
      (b.daily_display_cnt = 0),
      (b.total_display_cnt = 0);
  return a;
}
function removeIntlOpenAds(a) {
  return a.data ? ((a.data = { display_ad: 1 }), a) : a;
}
function removeSearchTopic(a) {
  return a.data && 0 !== a.data.search_topic?.cards.length
    ? ((a.data.search_topic.cards = Object.values(
        a.data.search_topic.cards,
      ).filter((a) => "searchtop" != a.type)),
      a.data.trending_topic && delete a.data.trending_topic,
      a)
    : a;
}
function modifiedUserCenter(a) {
  return a.data && 0 !== a.data.length
    ? (a.data.cards &&
        (a.data.cards = Object.values(a.data.cards).filter(
          (a) => "personal_vip" != a.items[0].type,
        )),
      a)
    : a;
}
function removeTopics(a) {
  return a.data ? ((a.data.order = ["search_topic"]), a) : a;
}
function isAd(a) {
  return (
    !!a &&
    (!(
      "\u5E7F\u544A" != a.mblogtypename && "\u70ED\u63A8" != a.mblogtypename
    ) ||
      !("ad" != a.promotion?.type) ||
      !("ad" != a.page_info?.actionlog?.source) ||
      !("\u5E7F\u544A" != a.content_auth_info?.content_auth_title))
  );
}
function squareHandler(a) {
  return a.items ? a : a;
}
function removeMainTab(a) {
  if (
    (a.loadedInfo && a.loadedInfo.headers && delete a.loadedInfo.headers,
    !a.items)
  )
    return a;
  let b = [];
  for (let c of a.items)
    isAd(c.data) ||
      (c.data?.page_info?.video_limit && delete c.data.page_info.video_limit,
      c.data?.common_struct && delete c.data.common_struct,
      c.category
        ? "group" == c.category
          ? -1 != JSON.stringify(c.items).indexOf("profile_top") && b.push(c)
          : b.push(c)
        : b.push(c));
  return (a.items = b), log("removeMainTab success"), a;
}
function removeMain(a) {
  if (
    (a.loadedInfo && a.loadedInfo.headers && delete a.loadedInfo.headers,
    !a.items)
  )
    return a;
  let b = [];
  for (let c of a.items)
    if ("feed" == c.category) isAd(c.data) || b.push(c);
    else if ("group" == c.category) {
      if (
        0 < c.items.length &&
        c.items[0].data?.itemid?.includes("search_input")
      )
        (c.items = c.items.filter(
          (a) =>
            a?.data?.itemid?.includes("mine_topics") ||
            a?.data?.itemid?.includes("search_input") ||
            202 == a?.data?.card_type,
        )),
          (c.items[0].data.hotwords = [
            { word: "\u641C\u7D22\u8D85\u8BDD", tip: "" },
          ]),
          b.push(c);
      else if (
        0 < c.items.length &&
        c.items[0].data?.itemid?.includes("top_title")
      )
        continue;
      else
        0 < c.items.length
          ? ((c.items = Object.values(c.items).filter(
              (a) => "feed" == a.category || "card" == a.category,
            )),
            b.push(c))
          : b.push(c);
    } else if (c.data?.card_type && -1 < [202, 200].indexOf(c.data.card_type))
      continue;
    else b.push(c);
  return (a.items = b), log("removeMain success"), a;
}
function topicHandler(a) {
  const b = a.cards;
  if (!b) return a;
  if (!mainConfig.removeUnfollowTopic && !mainConfig.removeUnusedPart) return a;
  let d = [];
  for (let e of b) {
    let a = !0;
    if (e.mblog) {
      let b = e.mblog.buttons;
      mainConfig.removeUnfollowTopic && b && "follow" == b[0].type && (a = !1);
    } else {
      if (!mainConfig.removeUnusedPart) continue;
      if ("bottom_mix_activity" == e.itemid) a = !1;
      else if ("\u6B63\u5728\u6D3B\u8DC3" == e?.top?.title) a = !1;
      else if (200 == e.card_type && e.group) a = !1;
      else {
        let b = e.card_group;
        if (!b) continue;
        let c = b[0];
        if (
          -1 <
          [
            "guess_like_title",
            "cats_top_title",
            "chaohua_home_readpost_samecity_title",
          ].indexOf(c.itemid)
        )
          a = !1;
        else if (1 < b.length) {
          let a = [];
          for (let c of b)
            -1 ==
              ["chaohua_discovery_banner_1", "bottom_mix_activity"].indexOf(
                c.itemid,
              ) && a.push(c);
          e.card_group = a;
        }
      }
    }
    a && d.push(e);
  }
  return (a.cards = d), log("topicHandler success"), a;
}
function removeSearchMain(a) {
  let b = a.channelInfo.channels;
  if (!b) return a;
  let c = [];
  for (let d of b)
    d.payload &&
      (removeSearch(d.payload),
      delete d.titleInfoAbsorb,
      delete d.titleInfo,
      delete d.title,
      c.push(d));
  return (
    (a.channelInfo.channels = c),
    a.header?.data && removeHeader(a.header.data),
    a.channelInfo?.moreChannels &&
      (delete a.channelInfo.moreChannels, delete a.channelInfo.channelConfig),
    log("remove_search main success"),
    a
  );
}
function removeHeader(a) {
  if (!a.items) return a;
  let b = [];
  for (let c of a.items)
    "group" == c.category &&
      ((c.items = c.items.filter(
        (a) =>
          null == a.data?.card_type ||
          101 === a.data?.card_type ||
          17 === a.data?.card_type,
      )),
      0 < c.items.length && b.push(c));
  return log("remove Header success"), (a.items = b), a;
}
function checkSearchWindow(a) {
  return (
    !!mainConfig.removeSearchWindow &&
    !("card" != a.category) &&
    ("finder_window" == a.data?.itemid ||
      "discover_gallery" == a.data?.itemid ||
      "more_frame" == a.data?.itemid ||
      208 == a.data?.card_type ||
      236 == a.data?.card_type ||
      247 == a.data?.card_type ||
      217 == a.data?.card_type ||
      101 == a.data?.card_type ||
      19 == a.data?.card_type ||
      a.data?.mblog?.page_info?.actionlog?.source?.includes("ad") ||
      a.data?.pic?.includes("ads"))
  );
}
function removeSearch(a) {
  if (!a.items) return a;
  let b = [];
  for (let c of a.items)
    "feed" == c.category
      ? isAd(c.data) ||
        (c.data?.page_info?.video_limit && delete c.data.page_info.video_limit,
        b.push(c))
      : "group" == c.category
      ? "guess" !== c.header?.type &&
        ((c.items = c.items.filter(
          (a) =>
            null == a.data?.card_type ||
            17 === a.data?.card_type ||
            10 === a.data?.card_type,
        )),
        0 < c.items.length && b.push(c))
      : checkSearchWindow(c) || b.push(c);
  return (
    (a.items = b),
    a.loadedInfo &&
      ((a.loadedInfo.searchBarContent = []),
      a.loadedInfo.headerBack &&
        (a.loadedInfo.headerBack.channelStyleMap = {})),
    log("remove_search success"),
    a
  );
}
function removeMsgAd(a) {
  if (a.messages) {
    let b = [];
    for (let c of a.messages) c.msg_card?.ad_tag || b.push(c);
    return (a.messages = b), a;
  }
}
function removePage(a) {
  return (
    removeCards(a),
    mainConfig.removePinedTrending &&
      a.cards &&
      0 < a.cards.length &&
      a.cards[0].card_group &&
      (a.cards[0].card_group = a.cards[0].card_group.filter(
        (a) =>
          !(
            a?.actionlog?.ext?.includes("ads_word") ||
            a?.itemid?.includes("t:51") ||
            a?.itemid?.includes("ads_word")
          ),
      )),
    a
  );
}
function removeCards(a) {
  if ((a.hotwords && (a.hotwords = []), a.cards)) {
    let c = [];
    for (let d of a.cards) {
      if (
        "232082type=1" == a.cardlistInfo?.containerid &&
        (17 == d.card_type || 58 == d.card_type || 11 == d.card_type)
      ) {
        var b = d.card_type + 1;
        d = { card_type: b };
      }
      let e = d.card_group;
      if (e && 0 < e.length) {
        let a = [];
        for (const b of e) {
          let c = b.card_type;
          118 == c ||
            isAd(b.mblog) ||
            -1 != JSON.stringify(b).indexOf("res_from:ads") ||
            a.push(b);
        }
        (d.card_group = a), c.push(d);
      } else {
        let a = d.card_type;
        if (-1 < [9, 165].indexOf(a)) isAd(d.mblog) || c.push(d);
        else if (-1 < [1007, 180].indexOf(a)) continue;
        else c.push(d);
      }
    }
    a.cards = c;
  }
  a.items && (log("data.items"), removeSearch(a));
}
function lvZhouHandler(a) {
  if (mainConfig.removeLvZhou && a) {
    let b = a.common_struct;
    if (b) {
      let c = [];
      for (const a of b) "\u7EFF\u6D32" != a.name && c.push(a);
      a.common_struct = c;
    }
  }
}
function isBlock(a) {
  let b = mainConfig.blockIds || [];
  if (0 === b.length) return !1;
  let c = a.user.id;
  for (const d of b) if (d == c) return !0;
  return !1;
}
function removeTimeLine(a) {
  for (const b of ["ad", "advertises", "trends", "headers"])
    a[b] && delete a[b];
  if (a.statuses) {
    let b = [];
    for (const c of a.statuses)
      isAd(c) ||
        (lvZhouHandler(c),
        c.common_struct && delete c.common_struct,
        c.category ? "group" != c.category && b.push(c) : b.push(c));
    a.statuses = b;
  }
}
function removeHomeVip(a) {
  return a.header ? (a.header.vipView && (a.header.vipView = null), a) : a;
}
function removeVideoRemind(a) {
  (a.bubble_dismiss_time = 0),
    (a.exist_remind = !1),
    (a.image_dismiss_time = 0),
    (a.image = ""),
    (a.tag_image_english = ""),
    (a.tag_image_english_dark = ""),
    (a.tag_image_normal = ""),
    (a.tag_image_normal_dark = "");
}
function itemExtendHandler(a) {
  if (
    (mainConfig.removeRelate || mainConfig.removeGood) &&
    a.trend &&
    a.trend.titles
  ) {
    let b = a.trend.titles.title;
    mainConfig.removeRelate && "\u76F8\u5173\u63A8\u8350" === b
      ? delete a.trend
      : mainConfig.removeGood &&
        "\u535A\u4E3B\u597D\u7269\u79CD\u8349" === b &&
        delete a.trend;
  }
  mainConfig.removeFollow && a.follow_data && (a.follow_data = null),
    mainConfig.removeRewardItem && a.reward_info && (a.reward_info = null),
    a.head_cards && delete a.head_cards,
    a.page_alerts && (a.page_alerts = null);
  try {
    let b = a.trend.extra_struct.extBtnInfo.btn_picurl;
    -1 < b.indexOf("timeline_icon_ad_delete") && delete a.trend;
  } catch (a) {}
  if (mainConfig.modifyMenus && a.custom_action_list) {
    let b = [];
    for (const c of a.custom_action_list) {
      let a = c.type,
        d = itemMenusConfig[a];
      d === void 0
        ? b.push(c)
        : "mblog_menus_copy_url" === a
        ? b.unshift(c)
        : d && b.push(c);
    }
    a.custom_action_list = b;
  }
}
function updateFollowOrder(a) {
  try {
    for (let b of a.items)
      if ("mainnums_friends" === b.itemId) {
        let a = b.click.modules[0].scheme;
        return (
          (b.click.modules[0].scheme = a.replace(
            "231093_-_selfrecomm",
            "231093_-_selffollowed",
          )),
          void log("updateFollowOrder success")
        );
      }
  } catch (a) {
    console.log("updateFollowOrder fail");
  }
}
function updateProfileSkin(a, b) {
  try {
    let c = mainConfig[b];
    if (!c) return;
    let e = 0;
    for (let b of a.items)
      if (b.image)
        try {
          (dm = b.image.style.darkMode),
            "alpha" != dm && (b.image.style.darkMode = "alpha"),
            (b.image.iconUrl = c[e++]),
            b.dot && (b.dot = []);
        } catch (a) {}
    log("updateProfileSkin success");
  } catch (a) {
    console.log("updateProfileSkin fail");
  }
}
function removeHome(a) {
  if (!a.items) return a;
  let b = [];
  for (let c of a.items) {
    let a = c.itemId;
    if ("profileme_mine" == a)
      mainConfig.removeHomeVip && (c = removeHomeVip(c)),
        c.header?.vipIcon && delete c.header.vipIcon,
        updateFollowOrder(c),
        b.push(c);
    else if ("100505_-_top8" == a)
      updateProfileSkin(c, "profileSkin1"), b.push(c);
    else if ("100505_-_newcreator" == a)
      "grid" == c.type
        ? (updateProfileSkin(c, "profileSkin2"), b.push(c))
        : !mainConfig.removeHomeCreatorTask && b.push(c);
    else if (
      "100505_-_chaohua" == a ||
      "100505_-_manage" == a ||
      "100505_-_recentlyuser" == a
    )
      0 < c.images?.length &&
        (c.images = c.images.filter(
          (a) =>
            "100505_-_chaohua" == a.itemId ||
            "100505_-_recentlyuser" == a.itemId,
        )),
        b.push(c);
    else continue;
  }
  return (a.items = b), a;
}
function removeCheckin(a) {
  log("remove tab1\u7B7E\u5230"), (a.show = 0);
}
function removeMediaHomelist(a) {
  mainConfig.removeLiveMedia &&
    (log("remove \u9996\u9875\u76F4\u64AD"), (a.data = {}));
}
function removeComments(a) {
  let b = [
      "\u5E7F\u544A",
      "\u5EE3\u544A",
      "\u76F8\u5173\u5185\u5BB9",
      "\u63A8\u8350",
      "\u70ED\u63A8",
      "\u63A8\u85A6",
    ],
    c = a.datas || [];
  if (0 !== c.length) {
    let d = [];
    for (const a of c) {
      let c = a.adType || "";
      -1 == b.indexOf(c) && 6 != a.type && d.push(a);
    }
    log("remove \u8BC4\u8BBA\u533A\u76F8\u5173\u548C\u63A8\u8350\u5185\u5BB9"),
      (a.datas = d),
      a.tip_msg && delete a.tip_msg;
  }
}
function containerHandler(a) {
  mainConfig.removeInterestFriendInTopic &&
    "\u8D85\u8BDD\u91CC\u7684\u597D\u53CB" === a.card_type_name &&
    (log("remove \u8D85\u8BDD\u91CC\u7684\u597D\u53CB"), (a.card_group = [])),
    mainConfig.removeInterestTopic &&
      a.itemid &&
      (-1 < a.itemid.indexOf("infeed_may_interest_in")
        ? (log("remove \u611F\u5174\u8DA3\u7684\u8D85\u8BDD"),
          (a.card_group = []))
        : -1 < a.itemid.indexOf("infeed_friends_recommend") &&
          (log("remove \u8D85\u8BDD\u597D\u53CB\u5173\u6CE8"),
          (a.card_group = [])));
}
function userHandler(a) {
  if (((a = removeMainTab(a)), !mainConfig.removeInterestUser)) return a;
  if (!a.items) return a;
  let b = [];
  for (let c of a.items) {
    let a = !0;
    if ("group" == c.category)
      try {
        "\u53EF\u80FD\u611F\u5174\u8DA3\u7684\u4EBA" == c.items[0].data.desc &&
          (a = !1);
      } catch (a) {}
    a && (c.data?.common_struct && delete c.data.common_struct, b.push(c));
  }
  return (a.items = b), log("removeMain sub success"), a;
}
function nextVideoHandler(a) {
  if (!a.statuses) return a;
  let b = [];
  for (let c of a.statuses)
    if (!isAd(c)) {
      const a = ["forward_redpacket_info", "shopping", "float_info", "tags"];
      for (const b of a) c.video_info?.[b] && delete c.video_info[b];
      b.push(c);
    }
  return (a.statuses = b), log("removeMainTab Success"), a;
}
function tabSkinHandler(a) {
  try {
    let b = mainConfig.tabIconVersion;
    if (((a.data.canUse = 1), !b || !mainConfig.tabIconPath)) return;
    if (100 > b) return;
    let c = a.data.list;
    for (let a of c) (a.version = b), (a.downloadlink = mainConfig.tabIconPath);
    log("tabSkinHandler success");
  } catch (a) {
    log("tabSkinHandler fail");
  }
}
function skinPreviewHandler(a) {
  a.data.skin_info.status = 1;
}
function removeLuaScreenAds(a) {
  if (!a.cached_ad) return a;
  for (let b of a.cached_ad.ads)
    (b.start_date = 1893254400),
      (b.show_count = 0),
      (b.duration = 0),
      (b.end_date = 1893340799);
  return a;
}
function removePhpScreenAds(a) {
  if (!a.ads) return a;
  (a.show_push_splash_ad = !1),
    (a.background_delay_display_time = 0),
    (a.lastAdShow_delay_display_time = 0),
    (a.realtime_ad_video_stall_time = 0),
    (a.realtime_ad_timeout_duration = 0);
  for (let b of a.ads)
    (b.displaytime = 0),
      (b.displayintervel = 86400),
      (b.allowdaydisplaynum = 0),
      (b.displaynum = 0),
      (b.displaytime = 1),
      (b.begintime = "2029-12-30 00:00:00"),
      (b.endtime = "2029-12-30 23:59:59");
  return a;
}
function log(a) {
  mainConfig.isDebug && console.log(a);
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
