/**
 * Created by lishuai on 2017/4/6.
 */
//系统模板
var obj = {
    "err_code": 0,
    "err_msg": "success",
    "data": {
        "common": {
            "title": "\u901a\u7528\u767b\u8bb0",
            "name": "common",
            "description": "\u5411\u591a\u4eba\u6536\u96c6\u6570\u636e",
            "templates": {
                "simple": {
                    "title": "\u7b80\u5355",
                    "name": "simple",
                    "description": "\u7b80\u5355\u5feb\u901f"
                }
            }
        },
        "group_week_report": {
            "title": "\u56e2\u961f\u5468\u62a5",
            "name": "group_week_report",
            "description": "\u591a\u4eba\u5171\u540c\u586b\u5199\u5468\u62a5",
            "templates": {
                "simple": {
                    "title": "\u7b80\u5355",
                    "name": "simple",
                    "description": "\u7b80\u5355\u5feb\u901f"
                }
            }
        },
        "registration": {
            "title": "\u767b\u8bb0\u62a5\u540d",
            "name": "registration",
            "description": "\u62a5\u540d\u4fe1\u606f\u6536\u96c6",
            "templates": {
                "simple": {
                    "title": "\u7b80\u5355",
                    "name": "simple",
                    "description": "\u7b80\u5355\u5feb\u901f"
                }
            }
        },
        "voting": {
            "title": "\u6295\u7968",
            "name": "voting",
            "description": "\u6295\u7968\u4fe1\u606f\u6536\u96c6",
            "templates": {
                "simple": {
                    "title": "\u7b80\u5355",
                    "name": "simple",
                    "description": "\u7b80\u5355\u5feb\u901f"
                },
                "custom": {
                    "title": "\u5b9a\u5236",
                    "name": "custom",
                    "description": "\u81ea\u6709\u5b9a\u5236\u5c55\u793a\u5185\u5bb9"
                }
            }
        }
    }
};
//模板详情
var detail = {
    "err_code": 0,
    "err_msg": "success",
    "data": {
        "scenario": "exam",
        "pages": [
            {
                "name": "voting",
                "title": "\u6295\u7968\u9875",
                "type": "I",
                "data_schemas": [{
                    "schema": {
                        "id": "c1001",
                        "title": "\u6295\u7968\u98791",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }, "config": {"required": "Y", "showname": "label", "component": "R", "align": "V"}
                }, {
                    "schema": {
                        "id": "c1002",
                        "title": "\u6295\u7968\u98792",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }, "config": {"required": "Y", "showname": "label", "component": "R", "align": "V"}
                }, {
                    "schema": {
                        "id": "c1003",
                        "title": "\u6295\u7968\u98793",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }, "config": {"required": "Y", "showname": "label", "component": "R", "align": "V"}
                }],
                "act_schemas": [{
                    "id": "btnSubmit",
                    "name": "submit",
                    "label": "\u63d0\u4ea4\u6295\u7968",
                    "next": "result"
                }]
            }, {
                "name": "result",
                "title": "\u6295\u7968\u7ed3\u679c\u9875",
                "type": "V",
                "data_schemas": [{
                    "config": {"id": "s1", "pattern": "record", "inline": "N", "splitLine": "Y"},
                    "schema": {
                        "id": "c1001",
                        "title": "\u6295\u7968\u98791",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }
                }, {
                    "config": {"id": "s2", "pattern": "record", "inline": "N", "splitLine": "Y"},
                    "schema": {
                        "id": "c1002",
                        "title": "\u6295\u7968\u98792",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }
                }, {
                    "config": {"id": "s3", "pattern": "record", "inline": "N", "splitLine": "Y"},
                    "schema": {
                        "id": "c1003",
                        "title": "\u6295\u7968\u98793",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }
                }],
                "act_schemas": [{
                    "id": "act2",
                    "name": "editRecord",
                    "label": "\u4fee\u6539\u6295\u7968",
                    "next": "voting"
                }]
            }],
        "schema": [
            {
                "id": "c1001",
                "title": "\u6295\u7968\u98791",
                "type": "single",
                "score": "Y",
                "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                    "v": "v2",
                    "l": "\u540c\u610f",
                    "score": 4
                }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                    "v": "v4",
                    "l": "\u6709\u5f85\u63d0\u9ad8",
                    "score": 2
                }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
            }, {
                "id": "c1002",
                "title": "\u6295\u7968\u98792",
                "type": "single",
                "score": "Y",
                "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                    "v": "v2",
                    "l": "\u540c\u610f",
                    "score": 4
                }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                    "v": "v4",
                    "l": "\u6709\u5f85\u63d0\u9ad8",
                    "score": 2
                }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
            }, {
                "id": "c1003",
                "title": "\u6295\u7968\u98793",
                "type": "single",
                "score": "Y",
                "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                    "v": "v2",
                    "l": "\u540c\u610f",
                    "score": 4
                }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                    "v": "v4",
                    "l": "\u6709\u5f85\u63d0\u9ad8",
                    "score": 2
                }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
            }],
        "scenarioConfig": {"can_rounds": "D"},
        "entryRule": {"otherwise": {"entry": "voting"}},
        "multi_rounds": "N",
        "enrolled_entry_page": "result"
    }
};

//模板信息
var exam = {
    "err_code": 0,
    "err_msg": "success",
    "data": {
        "user": {"fan": {"nickname": "\u6f14\u793a\u7528\u6237"}},
        "page": {
            "name": "voting",
            "title": "\u6295\u7968\u9875",
            "type": "I",
            "data_schemas": [
                {
                    "schema": {
                        "id": "c1001",
                        "title": "\u6295\u7968\u98791",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }, "config": {"required": "Y", "showname": "label", "component": "R", "align": "V"}
                }, {
                    "schema": {
                        "id": "c1002",
                        "title": "\u6295\u7968\u98792",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }, "config": {"required": "Y", "showname": "label", "component": "R", "align": "V"}
                }, {
                    "schema": {
                        "id": "c1003",
                        "title": "\u6295\u7968\u98793",
                        "type": "single",
                        "score": "Y",
                        "ops": [{"v": "v1", "l": "\u975e\u5e38\u540c\u610f", "score": 5}, {
                            "v": "v2",
                            "l": "\u540c\u610f",
                            "score": 4
                        }, {"v": "v3", "l": "\u4e00\u822c", "score": 3}, {
                            "v": "v4",
                            "l": "\u6709\u5f85\u63d0\u9ad8",
                            "score": 2
                        }, {"v": "v5", "l": "\u4e0d\u540c\u610f", "score": 1}]
                    }, "config": {"required": "Y", "showname": "label", "component": "R", "align": "V"}
                }],
            "act_schemas": [{
                "id": "btnSubmit",
                "name": "submit",
                "label": "\u63d0\u4ea4\u6295\u7968",
                "next": "result"
            }],
            "html": "<div wrap=\"text\" class=\"form-group\">\u8bf7\u53c2\u4e0e\u6295\u7968\uff01<\/div>\r\n<div wrap=\"input\" class=\"form-group form-group-lg\" schema=\"c1001\" schema-type=\"single\"><label>\u6295\u7968\u98791<\/label>\r\n<ul>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v1\" ng-model=\"data.c1001\" \/><span>\u975e\u5e38\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v2\" ng-model=\"data.c1001\" \/><span>\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v3\" ng-model=\"data.c1001\" \/><span>\u4e00\u822c<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v4\" ng-model=\"data.c1001\" \/><span>\u6709\u5f85\u63d0\u9ad8<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v5\" ng-model=\"data.c1001\" \/><span>\u4e0d\u540c\u610f<\/span><\/label><\/li>\r\n<\/ul>\r\n<\/div>\r\n<div wrap=\"input\" class=\"form-group form-group-lg\" schema=\"c1002\" schema-type=\"single\"><label>\u6295\u7968\u98792<\/label>\r\n<ul>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v1\" ng-model=\"data.c1002\" \/><span>\u975e\u5e38\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v2\" ng-model=\"data.c1002\" \/><span>\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v3\" ng-model=\"data.c1002\" \/><span>\u4e00\u822c<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v4\" ng-model=\"data.c1002\" \/><span>\u6709\u5f85\u63d0\u9ad8<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v5\" ng-model=\"data.c1002\" \/><span>\u4e0d\u540c\u610f<\/span><\/label><\/li>\r\n<\/ul>\r\n<\/div>\r\n<div wrap=\"input\" class=\"form-group form-group-lg\" schema=\"c1003\" schema-type=\"single\"><label>\u6295\u7968\u98793<\/label>\r\n<ul>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v1\" ng-model=\"data.c1003\" \/><span>\u975e\u5e38\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v2\" ng-model=\"data.c1003\" \/><span>\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v3\" ng-model=\"data.c1003\" \/><span>\u4e00\u822c<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v4\" ng-model=\"data.c1003\" \/><span>\u6709\u5f85\u63d0\u9ad8<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v5\" ng-model=\"data.c1003\" \/><span>\u4e0d\u540c\u610f<\/span><\/label><\/li>\r\n<\/ul>\r\n<\/div>\r\n<div id=\"btnSubmit\" class=\"form-group\" wrap=\"button\"><button class=\"btn btn-primary btn-block btn-lg\" ng-click=\"submit($event,'result')\"><span>\u63d0\u4ea4\u6295\u7968<\/span><\/button><\/div>",
            "css": "",
            "js": ""
        }
    }
}


var data = {
    "err_code": 0,
    "err_msg": "success",
    "data": {
        "id": "58e6e2aae0946",
        "siteid": "79feceb6363510a25c13bb56416c15c9",
        "mpid": "",
        "creater": "582c289cdbde2",
        "creater_name": "lszgf_li@163.com",
        "creater_src": "A",
        "create_at": "1491526314",
        "modifier": "582c289cdbde2",
        "modifier_name": "lszgf_li@163.com",
        "modifier_src": "A",
        "modify_at": "1491526314",
        "public_visible": "N",
        "shift2pc": "N",
        "can_taskcode": "N",
        "state": "1",
        "title": "\u6d4b\u9a8c\u6d3b\u52a8\u9879\u76ee-\u8bc4\u4ef7",
        "summary": "",
        "pic": "",
        "mission_id": "15",
        "mission_phase_id": "",
        "scenario": "voting",
        "scenario_config": "{\"can_rounds\":\"D\"}",
        "round_cron": null,
        "count_limit": "0",
        "start_at": "0",
        "before_start_page": "",
        "end_at": "0",
        "after_end_page": "",
        "access_control": "N",
        "authapis": null,
        "entry_rule": {"otherwise": {"entry": "voting"}},
        "success_matter_type": null,
        "success_matter_id": null,
        "failure_matter_type": null,
        "failure_matter_id": null,
        "enrolled_entry_page": "result",
        "receiver_page": "",
        "remark_notice_page": "",
        "form_code_id": "0",
        "lottery_page_id": "0",
        "open_lastroll": "Y",
        "multi_rounds": "N",
        "notify_submit": "N",
        "can_discuss": "N",
        "can_coinpay": "N",
        "can_siteuser": "Y",
        "can_like_record": "N",
        "can_remark_record": "N",
        "can_autoenroll": "N",
        "can_invite": "N",
        "can_signin": "N",
        "can_lottery": "N",
        "remark_notice": "N",
        "tags": null,
        "category_tags": null,
        "enroll_app_id": "",
        "group_app_id": "",
        "read_num": "0",
        "share_friend_num": "0",
        "share_timeline_num": "0",
        "data_schemas": "[{\"id\":\"c1001\",\"title\":\"\u6295\u7968\u98791\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]},{\"id\":\"c1002\",\"title\":\"\u6295\u7968\u98792\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]},{\"id\":\"c1003\",\"title\":\"\u6295\u7968\u98793\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]}]",
        "use_site_header": "Y",
        "use_site_footer": "Y",
        "use_mission_header": "Y",
        "use_mission_footer": "Y",
        "extattrs": null,
        "template_id": "0",
        "template_version": "",
        "op_short_url_code": "",
        "rp_short_url_code": "",
        "type": "enroll",
        "entryUrl": "http:\/\/localhost\/rest\/site\/fe\/matter\/enroll?site=79feceb6363510a25c13bb56416c15c9&app=58e6e2aae0946",
        "scenarioConfig": {"can_rounds": "D"},
        "roundCron": [],
        "rpConfig": {},
        "pages": [{
            "id": "170",
            "siteid": "79feceb6363510a25c13bb56416c15c9",
            "mpid": "",
            "aid": "58e6e2aae0946",
            "creater": "582c289cdbde2",
            "create_at": "1491526314",
            "type": "I",
            "title": "\u6295\u7968\u9875",
            "name": "voting",
            "code_id": "340",
            "code_name": "58e6e2aae7d9e",
            "check_entry_rule": "N",
            "share_page": "N",
            "share_summary": null,
            "autoenroll_onenter": "N",
            "autoenroll_onshare": "N",
            "seq": "1",
            "data_schemas": "[{\"schema\":{\"id\":\"c1001\",\"title\":\"\u6295\u7968\u98791\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]},\"config\":{\"required\":\"Y\",\"showname\":\"label\",\"component\":\"R\",\"align\":\"V\"}},{\"schema\":{\"id\":\"c1002\",\"title\":\"\u6295\u7968\u98792\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]},\"config\":{\"required\":\"Y\",\"showname\":\"label\",\"component\":\"R\",\"align\":\"V\"}},{\"schema\":{\"id\":\"c1003\",\"title\":\"\u6295\u7968\u98793\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]},\"config\":{\"required\":\"Y\",\"showname\":\"label\",\"component\":\"R\",\"align\":\"V\"}}]",
            "act_schemas": "[{\"id\":\"btnSubmit\",\"name\":\"submit\",\"label\":\"\u63d0\u4ea4\u6295\u7968\",\"next\":\"result\"}]",
            "user_schemas": null,
            "html": "<div wrap=\"text\" class=\"form-group\">\u8bf7\u53c2\u4e0e\u6295\u7968\uff01<\/div>\r\n<div wrap=\"input\" class=\"form-group form-group-lg\" schema=\"c1001\" schema-type=\"single\"><label>\u6295\u7968\u98791<\/label>\r\n<ul>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v1\" ng-model=\"data.c1001\" \/><span>\u975e\u5e38\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v2\" ng-model=\"data.c1001\" \/><span>\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v3\" ng-model=\"data.c1001\" \/><span>\u4e00\u822c<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v4\" ng-model=\"data.c1001\" \/><span>\u6709\u5f85\u63d0\u9ad8<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1001\" value=\"v5\" ng-model=\"data.c1001\" \/><span>\u4e0d\u540c\u610f<\/span><\/label><\/li>\r\n<\/ul>\r\n<\/div>\r\n<div wrap=\"input\" class=\"form-group form-group-lg\" schema=\"c1002\" schema-type=\"single\"><label>\u6295\u7968\u98792<\/label>\r\n<ul>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v1\" ng-model=\"data.c1002\" \/><span>\u975e\u5e38\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v2\" ng-model=\"data.c1002\" \/><span>\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v3\" ng-model=\"data.c1002\" \/><span>\u4e00\u822c<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v4\" ng-model=\"data.c1002\" \/><span>\u6709\u5f85\u63d0\u9ad8<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1002\" value=\"v5\" ng-model=\"data.c1002\" \/><span>\u4e0d\u540c\u610f<\/span><\/label><\/li>\r\n<\/ul>\r\n<\/div>\r\n<div wrap=\"input\" class=\"form-group form-group-lg\" schema=\"c1003\" schema-type=\"single\"><label>\u6295\u7968\u98793<\/label>\r\n<ul>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v1\" ng-model=\"data.c1003\" \/><span>\u975e\u5e38\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v2\" ng-model=\"data.c1003\" \/><span>\u540c\u610f<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v3\" ng-model=\"data.c1003\" \/><span>\u4e00\u822c<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v4\" ng-model=\"data.c1003\" \/><span>\u6709\u5f85\u63d0\u9ad8<\/span><\/label><\/li>\r\n<li class=\"radio\" wrap=\"radio\"><label><input type=\"radio\" name=\"c1003\" value=\"v5\" ng-model=\"data.c1003\" \/><span>\u4e0d\u540c\u610f<\/span><\/label><\/li>\r\n<\/ul>\r\n<\/div>\r\n<div id=\"btnSubmit\" class=\"form-group\" wrap=\"button\"><button class=\"btn btn-primary btn-block btn-lg\" ng-click=\"submit($event,'result')\"><span>\u63d0\u4ea4\u6295\u7968<\/span><\/button><\/div>",
            "css": "",
            "js": "",
            "ext_js": [],
            "ext_css": []
        }, {
            "id": "171",
            "siteid": "79feceb6363510a25c13bb56416c15c9",
            "mpid": "",
            "aid": "58e6e2aae0946",
            "creater": "582c289cdbde2",
            "create_at": "1491526314",
            "type": "V",
            "title": "\u6295\u7968\u7ed3\u679c\u9875",
            "name": "result",
            "code_id": "341",
            "code_name": "58e6e2aae8d9b",
            "check_entry_rule": "N",
            "share_page": "N",
            "share_summary": null,
            "autoenroll_onenter": "N",
            "autoenroll_onshare": "N",
            "seq": "2",
            "data_schemas": "[{\"config\":{\"id\":\"s1\",\"pattern\":\"record\",\"inline\":\"N\",\"splitLine\":\"Y\"},\"schema\":{\"id\":\"c1001\",\"title\":\"\u6295\u7968\u98791\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]}},{\"config\":{\"id\":\"s2\",\"pattern\":\"record\",\"inline\":\"N\",\"splitLine\":\"Y\"},\"schema\":{\"id\":\"c1002\",\"title\":\"\u6295\u7968\u98792\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]}},{\"config\":{\"id\":\"s3\",\"pattern\":\"record\",\"inline\":\"N\",\"splitLine\":\"Y\"},\"schema\":{\"id\":\"c1003\",\"title\":\"\u6295\u7968\u98793\",\"type\":\"single\",\"score\":\"Y\",\"ops\":[{\"v\":\"v1\",\"l\":\"\u975e\u5e38\u540c\u610f\",\"score\":\"5\"},{\"v\":\"v2\",\"l\":\"\u540c\u610f\",\"score\":\"4\"},{\"v\":\"v3\",\"l\":\"\u4e00\u822c\",\"score\":\"3\"},{\"v\":\"v4\",\"l\":\"\u6709\u5f85\u63d0\u9ad8\",\"score\":\"2\"},{\"v\":\"v5\",\"l\":\"\u4e0d\u540c\u610f\",\"score\":\"1\"}]}}]",
            "act_schemas": "[{\"id\":\"act2\",\"name\":\"editRecord\",\"label\":\"\u4fee\u6539\u6295\u7968\",\"next\":\"voting\"}]",
            "user_schemas": null,
            "html": "<div><\/div>\r\n<div id=\"s1\" ng-controller=\"ctrlRecord\" wrap=\"value\" schema=\"c1001\" schema-type=\"single\" class=\"form-group wrap-splitline\"><label>\u6295\u7968\u98791<\/label>\r\n<div>{{value2Label(\"c1001\")}}<\/div>\r\n<\/div>\r\n<div id=\"s2\" ng-controller=\"ctrlRecord\" wrap=\"value\" schema=\"c1002\" schema-type=\"single\" class=\"form-group wrap-splitline\"><label>\u6295\u7968\u98792<\/label>\r\n<div>{{value2Label(\"c1002\")}}<\/div>\r\n<\/div>\r\n<div id=\"s3\" ng-controller=\"ctrlRecord\" wrap=\"value\" schema=\"c1003\" schema-type=\"single\" class=\"form-group wrap-splitline\"><label>\u6295\u7968\u98793<\/label>\r\n<div>{{value2Label(\"c1003\")}}<\/div>\r\n<\/div>\r\n<div id=\"act2\" class=\"form-group\" wrap=\"button\" ng-controller=\"ctrlRecord\"><button class=\"btn btn-primary btn-block btn-lg\" ng-click=\"editRecord($event,'voting')\"><span>\u4fee\u6539\u6295\u7968<\/span><\/button><\/div>",
            "css": "",
            "js": "",
            "ext_js": [],
            "ext_css": []
        }],
        "channels": [],
        "acl": [],
        "receiver": [],
        "mission": {
            "id": "15",
            "siteid": "79feceb6363510a25c13bb56416c15c9",
            "mpid": "",
            "title": "\u6d4b\u9a8c\u6d3b\u52a8\u9879\u76ee",
            "summary": "",
            "pic": "",
            "creater": "582c289cdbde2",
            "creater_name": "lszgf_li@163.com",
            "creater_src": "A",
            "create_at": "1491358951",
            "modifier": "582c289cdbde2",
            "modifier_name": "lszgf_li@163.com",
            "modifier_src": "A",
            "modify_at": "1491358990",
            "state": "1",
            "access_control": "N",
            "authapis": null,
            "start_at": "0",
            "end_at": "0",
            "header_page_name": "",
            "footer_page_name": "",
            "extattrs": null,
            "multi_phase": "N",
            "user_app_id": "",
            "user_app_type": "",
            "type": "mission",
            "phases": []
        }
    }
};
var data = [
    {
        "id": "c1001",
        "title": "投票项1",
        "type": "single",
        "score": "Y",
        "ops": [{"v": "v1", "l": "非常同意", "score": "5"}, {"v": "v2", "l": "同意", "score": "4"}, {
            "v": "v3",
            "l": "一般",
            "score": "3"
        },
            {"v": "v4", "l": "有待提高", "score": "2"}, {"v": "v5", "l": "不同意", "score": "1"}],
        "unique": "N",
        "_ver": "1"
    },
    {
        "title": "登记项2",
        "type": "multiple",
        "unique": "N",
        "_ver": "1",
        "id": "s1491536055399",
        "ops": [{"l": "选项1", "v": "v1"}, {"l": "选项2", "v": "v2"}, {"l": "选项3", "v": "v3"}]
    }];
var data = [
    {
        "config": {"id": "s1", "pattern": "record", "inline": "N", "splitLine": "Y"},
        "schema": {
            "id": "c1001",
            "title": "投票项1",
            "type": "single",
            "score": "Y",
            "ops": [{"v": "v1", "l": "非常同意", "score": "5"}, {"v": "v2", "l": "同意", "score": "4"}, {
                "v": "v3",
                "l": "一般",
                "score": "3"
            }, {"v": "v4", "l": "有待提高", "score": "2"}, {"v": "v5", "l": "不同意", "score": "1"}],
            "unique": "N",
            "_ver": "1"
        }
    }, {
        "config": {"id": "V1491536056677", "pattern": "record", "inline": "N", "splitLine": "Y"},
        "schema": {
            "title": "登记项2",
            "type": "multiple",
            "unique": "N",
            "_ver": "1",
            "id": "s1491536055399",
            "ops": [{"l": "选项1", "v": "v1"}, {"l": "选项2", "v": "v2"}, {"l": "选项3", "v": "v3"}]
        }
    }
];

