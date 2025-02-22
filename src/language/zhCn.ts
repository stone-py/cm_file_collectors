export default {
    terminal: "终端",
    column: {
        add: '添加',
        tag: '标签',
        performer: '演员',
        setUp: '设置',
    },
    menu: {
        friendlyRewards: '友情打赏',
    },
    headers: {
        selectInputPlaceholder: '请输入名称、版号、番号',
        reset: '重置',
        ability: {
            history: '历史记录',
            hot: '当前热度',
            youLike: '猜你喜欢',
        }
    },
    resources: {
        title: {
            add: '添加资源',
            edit: '编辑资源',
        },
        clickUploadCoverPoster: '点击上传封面海报',
        form: {
            name: '名称',
            subclass: {
                headTitle: '资源信息',
                movieResourcesTitle: '影视资源',
                tagTitle: '标签',
            },
            mode: '资源类型',
            modeType: {
                movies: '影视',
                comic: '漫画',
                atlas: '图片集',
                files: '文件',
            },
            title: {
                movies: '影视名称',
                comic: '漫画名称',
                atlas: '图片集名称',
                files: '文件名称',
            },
            versionNumber: '版号、番号',
            issuingDate: '发行日期',
            country: '国家',
            definition: '清晰度',
            stars: '评分',
            director: '导演',
            performer: '演员',
            abstract: '摘要',
            pleaseSelectFileAddress: '请选择本地文件地址',
            btn: {
                addMovie: '添加影片',
                addMultipleMovie: '添加多个影片',
                addcomic: '添加漫画文件夹',
                addatlas: '添加图集文件夹',
                addfile: '添加文件',
                addfiles: '添加多个文件',
            },
            rule: {
                title: '请输入名称',
            },
            message: {
                addSuccess: '添加成功',
                addFail: '添加失败',
                editSuccess: '修改成功',
                editFail: '修改失败',
                delSuccess: '删除 [ {title} ] 成功',
                delSFail: '删除 [ {title} ] 失败',
            }
        }
    },
    tag: {
        tagBlockCondition: {
            single: '单选',
            multiple: '多选',
            and: '与',
            or: '或',
            not: '非',
        },
        all: '全部',
        noStar: '未评分',
        star: '{star}星',
        noPerformer: '无演员',
        admin: '标签管理',
        leftColumnDisplay: '左边栏显示',
        addClass: '添加标签分类',
        editlass: '修改标签分类',
        editTag: '修改标签',
        formClass: {
            name: '标签分类名称',
            ruleName: '请填写标签分类名称',
        },
        messageClass: {
            addSuccess: '添加标签分类成功',
            addFail: '添加标签分类失败',
            editSuccess: '修改标签分类成功',
            editFail: '修改标签分类失败',
        },
        formTag: {
            name: '标签名称',
            ruleName: '请填写标签名称',
            class: '标签分类',
            ruleClass: '请选择标签分类',
        },
        message: {
            addSuccess: '添加标签成功',
            addFail: '添加标签失败',
            editSuccess: '修改标签成功',
            editFail: '修改标签失败',
        },
    },
    details: {
        noPoster: '没有海报',
        directorAndPerformer: '导演 & 演员',
        tag: '标签',
        abstract: '摘要',
    },
    performer: {
        name: '姓名',
        aliasName: '别名',
        starRating: '评分',
        nationality: '国籍',
        career: '职业',
        careerMode: {
            performer: '演员',
            director: '导演',
        },
        dateOfBirth: '出生日期',
        introduction: '简介',
        inPerformerDatabases: '所属数据集',
        shootingAge: '拍摄年龄',
        viewingPerformerMovies: '查看【{name}】的影片',
        admin: '演员管理',
        pleaseEnterPerformerNameOrAlias: '请输入演员姓名、别名、首字母',
        pleaseSelectPerformerStars: '请选择星级',
        starsAll: '全部',
        noStars: '未评星',
        infoBtn: {
            add: '新增',
            edit: '修改',
            delete: '删除',
        },
        form: {
            add: '添加演员/导演',
            edit: '编辑演员/导演',
            clickUploadPhotos: '点击上传照片',
            uploadPhotos: '上传照片',
            ruleName: '请输入演员/导演姓名',
            ruleCareer: '请至少选择一项职业',
            rulePerformerBases_id: '请选择数据集',
            message: {
                addSuccess: '添加演员/导演成功',
                addFail: '添加演员/导演失败',
                editSuccess: '修改演员/导演成功',
                editFail: '修改演员/导演失败',
            }
        },
        yearsOld: '{age}岁',
    },
    performerDatabases: {
        title: '演员数据集',
        name: '数据集名称',
        ruleName: '请输入数据集名称',
        add: '新增演员集',
        cancel: '取消',
        submit: '提交',
        total: '演员数量',
        associatedDatabase: '关联数据库',
        importPerformerDatabases: '导入演员数据集',
        import: '导入',
        export: '导出',
        operations: '操作',
        edit: '修改',
        activate: '启用',
        deactivate: '停用',
        message: {
            addSuccess: '添加演员数据库成功',
            addFail: '添加演员数据库失败',
            editSuccess: '修改演员数据库成功',
            editFail: '修改演员数据库失败',
            exportSuccess: '导出数据成功',
            importSuccess: '导入数据成功，演员 {performerCount} 条，头像 {performerFaceCount} 张, 重启软件后生效.',
            importError: '导入数据失败',
        }
    },
    settings: {
        title: '设置',
        basicSettings: {
            title: '基础设置',
            countryList: '国家列表',
            definition: '清晰度',
        },
        leftSidebar: {
            title: '左侧边栏',
            leftSidebarShowItem: '左侧边栏显示项',
            leftSidebarTagShowMode: '标签显示模式',
        },
        performerTag: {
            title: '演员标签',
            showPerformerPhoto: '显示演员照片',
            shieldNoPerformerPhoto: '屏蔽无照片演员',
            performerShowNum: '演员标签显示数量',
            performerPreferred: '优先显示演员',
        },
        parameterSettings: {
            title: '参数设置',
            pageLimit: '分页显示数量',
            sortMode: '排序方式',
            sortModeData: {
                asc: '正序',
                desc: '倒序',
            },
            resourcesShowMode: '显示模式',
            resourcesShowModeData: {
                coverPoster: '封面图',
                table: '表格',
            },
            detailsDramaSeriesMode: '详情剧集显示模式',
            detailsDramaSeriesModeData: {
                fileName: '文件名',
                digit: '数字',
            },
            enableRecordingModule: {
                title: '开启记录模块',
                history: '历史记录',
                hot: '当前热度',
                youLike: '猜你喜欢',
                historyNumber: '历史记录显示数量',
                hotNumber: '当前热度显示数量',
                youLikeNumber: '猜你喜欢显示数量',
                youLikeWordNumber: '猜你喜欢取词量',
                youLikeHasTagClass: '猜你喜欢参与取词的标签分类',
                youLikeNowWord: '当前猜你喜欢词汇',
            },
        },
        play: {
            playAtlasImageWidth: '图像宽度',
            playAtlasMode: '图集显示',
            playAtlasModeData: {
                waterfall: '瀑布流',
                flex: '固定',
            }
        },
        plugin: {
            title: '插件管理',
        },
        coverPoster: {
            title: '封面海报设置',
            setSize: '封面海报大小设置',
            setSizeDefinition: '列表封图显示比例是以高度为218px做为设置条件，按比例调整大小。',
            width: "宽",
            height: '高',
            addButton: '添加新尺寸封面海报',
            displayHeight: '封面海报显示高度',
            displayHeightDefinition: '显示封图时的高度基数，开启该功能，会根据基数高度，将封图宽度放大或缩小',
            openCoverPosterHeightStatus: '开启封面海报高度控制',
            heightBase: '高度基数',
        },
    },
    filesDatabases: {
        title: '文件数据库',
        add: '添加文件数据库',
        edit: '修改文件数据库',
        cancel: '取消',
        name: '文件数据库名称',
        recordQuantity: '记录数量',
        mainPerformerDatabase: '(主)演员集',
        relatedPerformerDatabase: '关联演员集',
        ruleName: '请输入文件数据库名称',
        ruleMainPerformerDatabase: '请选择(主)演员集',
        message: {
            addSuccess: '添加文件数据库成功',
            addFail: '添加文件数据库失败',
            editSuccess: '修改文件数据库成功',
            editFail: '修改文件数据库失败',
        }
    },
    defaultTag: {
        tagMode: {
            fixed: '固定大小',
            auto: '自适应',
        },
        country: '国家',
        definition: '清晰度',
        year: '年份',
        starRating: '评分',
        performer: '演员',
        diyTag: '自定义标签',
    },
    tagYear: {
        year: '{year}年',
        before2000: '2000年前',
    },
    video: {
        versionNo: '版号、番号',
        includedTime: '收录时间',
    },
    server: {
        videoStreamingServer: '视频流服务器',
        message: {
            createSuccess: '视频流服务器已开启,访问地址 http://{ip}:{port}',
            createError: '视频流服务器开启失败，请检测端口{port}是否被占用',
            close: '视频流服务器 http://{ip}:{port} 已关闭',
        }
    },
    play: {
        resNoHasDramaSeries: '该操作无法执行，缺少对应资源信息。',
        comic: {
            perPage: '上一页',
            lastPage: '下一页',
            nowPage: '当前第( {page} )页',
        }
    },
    dramaSeriesPathReplacer: {
        title: '数据库资源路径替换器',
        allDataBases: '全部数据库',
        optDataBases: '操作数据库',
        search: '检索',
        searchPath: '检索路径',
        replace: '替换',
        replacePath: '替换路径',
        resultMessage: {
            searchSuccess: '检索到数据 {count} 条.',
            pleaseEnterSearchCriteria: '请先输入检索条件.',
            pleaseFilterTheDataToBeReplacedFirst: '请先筛选要替换的数据.',
            pleaseEnterReplaceContent: '请先输入替换内容.',
        }
    },
    system: {
        tags: {
            softConfig: '软件配置',
            updateLogs: '更新日志',
            aboutSoftware: '关于软件',
        },
        softConfig: {
            serverConfig: '视频流服务器配置',
            port: '服务器端口',
            selfStartingDescribe: '软件启动时，自动启动视频流服务器',
            passwordDescribe: 'Web访问视频流服务器口令密码',
            passwordIllustrate: '口令密码为空，则访问web视频流服务器不需要密码',
            language: '语言包',
            databasesPath: '数据库路径',
            databasesPathPlaceholder: '软件根目录',
            select: '选择',
            databasesPathIllustrate: '可将数据库迁移至软件根目录以外（例如nas的共享文件夹，可以让多个客户端访问该数据库），空值表示放置在软件根目录，选择新目录后需要从新启动软件生效。如果目录不存在，则会自动指定软件根目录。',
        },
        aboutSoftware: {
            statement: '声明',
            statementContent: '本软件为免费软件，主要用于方便有效的管理本地电脑中的视频。软件内的视频由使用者自行获取，所属版权归原版权单位。请勿将本软件用于非法活动中，产生的相关法律责任由使用者自行承担。同时也欢迎各位使用者根据自己使用的经验，对本软件提出相关的修改意见。',
            contactInformation: '联系方式',
        },
        updateLogs: {
            version: '版本',
        }
    },
    plugin: {
        cup: {
            name: '演员CupC插件',
            describe: '该插件在演员资料中添加Cup选项，并在左边栏出现Cup标签选择。',
            title: '罩杯',
            pleaseSelectCup: '请选择 {cup}',
            cupAll: '全部',
            noCup: '未定义',
            BWH: '三围',
            bust: '胸围',
            waist: '腰围',
            hip: '臀围',
            settingsPluginOpen: '开启演员Cup插件',
            showText: 'Cup显示文字',
        }
    },
    com: {
        table: {
            name: '名称',
            sort: '排序',
            operations: '操作',
            edit: '修改',
            delete: '删除',
            restore: '还原',
            activate: '启用',
            deactivate: '停用',
        },
        form: {
            title: '表单',
            submit: '提交',
            close: '关闭',
            reset: '重置',
            goback: '返回',
        },
        message: {
            OK: '确定',
            cancel: '取消',
            warning: '警告',
            deleteWarning: '删除"{0}"?',
            deleteSuccess: '删除"{0}"成功！',
            deleteFail: '删除"{0}"失败！',
            restoreWarning: '将 ["{0}"] 移出回收站?',
            restoreSuccess: '已将 ["{0}"] 移出回收站',
            restoreFail: '将 ["{0}"] 移出回收站失败！',
            activateWarning: '启用"{0}"?',
            activateSuccess: '启用"{0}"成功！',
            activateFail: '启用"{0}"失败！',
            deactivateWarning: '停用"{0}"?',
            deactivateSuccess: '停用"{0}"成功！',
            deactivateFail: '停用"{0}"失败！',
        },
        cropper: {
            title: '图片编辑',
            selectPicture: '选择图片',
            zoomIn: '放大',
            zoomOut: '缩小',
            rotateLeft: '左旋转',
            rotateRight: '右旋转',
            autoLeftMaxCrop: '自动左',
            autoRightMaxCrop: '自动右',
            submit: '提交',
        },
    },
    language: {
        zhCn: '简体中文',
        en: '英文',
        ja: '日文',
    },
    country: {
        China: '中国', Japan: '日本', India: '印度', SaudiArabia: '沙特阿拉伯', SouthKorea: '韩国', NorthKorea: '朝鲜', Philippines: '菲律宾', Singapore: '新加坡', Kazakhstan: '哈萨克斯坦', Indonesia: '印度尼西亚', Iraq: '伊拉克', Afghanistan: '阿富汗', Pakistan: '巴基斯坦', Turkey: '土耳其',
        England: '英国', France: '法国', Germany: '德国', Italy: '意大利', Russia: '俄罗斯', Norway: '挪威', Iceland: '冰岛', Denmark: '丹麦', Ukraine: '乌克兰', Poland: '波兰', Netherlands: '荷兰', Greece: '希腊', Spain: '西班牙', Portugal: '葡萄牙',
        America: '美国', Canada: '加拿大', Mexico: '墨西哥', CostaRica: '哥斯达黎加', Cuba: '古巴', Jamaica: '牙买加', Brazil: '巴西', Chile: '智利', Argentina: '阿根廷', Peru: '秘鲁',
        Australia: '澳大利亚', NewZealand: '新西兰', Tuvalu: '图瓦卢', PapuaNewGuinea: '巴布亚新几内亚',
        Egypt: '埃及', SouthAfrica: '南非', Ethiopia: '埃塞俄比亚', Congo: '刚果共和国', Zimbabwe: '津巴布韦', Madagascar: '马达加斯加',
        OtherCountry: '其他国家'
    },
    definition: {
        '8K': '8K', '4K': '4K', '2K': '2K', '1080P': '1080P', '720P': '720P', HighDefinition: '高清', StandardDefinition: '标清'
    }
}