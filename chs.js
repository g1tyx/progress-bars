/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    'Adds 3 workers.': '增加3个工人。',
    'Double Clicker': '双击',
    'Doubles the cash earned from clicking.': '通过点击获得的现金 x2。',
    'Logging Truck': '伐木车',
    'Increases the supply limit of Wood by 50.': '将木材的供应上限增加50。',
    'Warehouse Capacity': '仓库容量',
    'Increases the capacity of your Commodity Sales warehouse by 50.': '将您的商品销售仓库的容量增加50。',
    'Plank Distribution': '板材分布',
    'Increase the base unit price of Wood by $0.10.': '将木材的基本单价提高$0.10。',
    'Consultants': '咨询顾问',
    'Triple Clicker': '三连击',
    'Triples the cash earned from clicking.': '通过点击获得的现金 x3',
    'Contractors': '承包商',
    'Advisory Board #1': '顾问委员会 #1',
    'Grain Tractor': '谷物拖拉机',
    'Mass Reforestation': '大规模造林',
    'Truck Upgrade': '卡车升级',
    'Increases the supply limit of Food by 50.': '将食物的供应上限增加50。',
    'Increases the supply limit of Rubber by 50.': '将橡胶的供应上限增加50。',
    'Increases the supply limit of Forest by 25, and unlock another synergy bonus at 40+ supply.': '增加森林供给上限25点，并在40+供给时释放另一个协同加成。',
    'Chipboard Mill': '刨花板厂',
    'Increase the base unit price of Wood by $0.50.': '将木材的基本单价提高$0.5。',
    'Marble Shaping': '大理石成形',
    'Increase the base unit price of Stone by $2.00.': '将石头的基本单价提高$2。',
    'Regional Sales': '区域销售',
    'Increases your Sales Multiplier by 0.50x.': '将您的销售倍数提高 x0.50。',
    'Food Processing': '食品加工',
    'Increase the base unit price of Food by $0.25.': '将食品的基本单价提高$0.25。',
    'Functional Mastery #1': '支配能力 #1',
    'Functional Sales now sells 60% of their supply per cycle.': '功能销售现在每周期销售其供应量的60%。',
    'Tire Factory': '轮胎工厂',
    'Increase the base unit price of Rubber by $0.80.': '将橡胶的基本单价提高$0.80。',
    'Manufacturers': '制造商',
    'Irrigation Sprinklers': '喷灌装置',
    'Cattle Prods': '牛刺',
    'Increases the supply limit of Livestock by 50.': '将牲畜的供应量上限增加50。',
    'Advisory Board #3': '顾问委员会 #3',
    'Instantly gain 250 experience on all Ocean quadrant nodes.': '立即获得250经验对所有海洋象限节点。',
    'Advisory Board #4': '顾问委员会 #4',
    'Instantly gain 250 experience on all Forest quadrant nodes.': '立即获得250经验对所有森林象限节点。',
    'Warehouse Conveyers': '仓库输送机',
    'Functional Sales now transports 60% of their supply per cycle.': '功能销售现在每周期运送60%的供应。',
    'Butcher Shop': '肉店',
    'Increase the base unit price of Livestock by $5.00.': '将牲畜的基本单价提高$5。',
    'Commodity Mastery #2': '商品掌握 ＃2',
    'Commodity Sales now sells 70% of their supply per cycle.': '商品销售现在每周期销售70％的供应。',
    'Passive Income Stream': '被动收入来源',
    'You passively generate $250.00 every 5 seconds.': '你被动地每5秒产生$250。',
    'Pneumatic Tools': '通用工具',
    'Increases the speed of your Aqua Tools by 33%.': '增加你的水处理工具33%的速度。',
    'Advisory Board #5': '顾问委员会 #5',
    'Instantly gain 400 experience on all Mountain quadrant nodes.': '立即获得所有山象限节点上的400经验。',
    'Aqua Tool Synergy': '水族工具协同作用',
    'For every other tool at 80%+ supply, your workers create +1 Aqua Tool.': '每提供80%以上的其他工具，你的工人就会创建+1 水族工具。',
    'Continental Sales': '大陆销售',
    'Increases your Sales Multiplier by 1.00x.': '将您的销售倍数增加1.00倍。',
    'Durable Flooring': '耐用地板',
    'Increase the base unit price of Rubber by $2.10.': '将橡胶的基本单价提高$2.10。',
    'Cut Tool Synergy': '切割工具协同作用',
    'For every other tool at 80%+ supply, your workers create +1 Cut Tool.': '每提供80%以上的其他工具，你的工人就会创造+1切割工具。',
    'Seed Spreaders': '撒种机',
    'Increase the base unit price of Food by $1.25.': '将食品的基本单价提高$1.25。',
    'Functional Mastery #2': '支配能力 #2',
    'Functional Sales now sells 70% of their supply per cycle.': '功能销售现在每周期销售其供应量的70%。',
    'Commodity Sales now transports 75% of their supply per cycle.': '商品销售现在每周期运输75%的供应量。',
    'International Shipping': '国际航运',
    'Precision Smelting': '精密熔炼',
    'Increase the base unit price of Ore by $3.80.': '将矿石的基本单价提高$3.80。',
    'Moto Tool Synergy': '机车工具协同作用',
    'For every other tool at 80%+ supply, your workers create +1 Moto Tool.': '对于其他80%以上的工具，您的工人创建+1 机车工具。',
    'Unmanned Vehicles': '无人驾驶车辆',
    'Global Sales': '全球销售',
    'Increases the speed of Prairie by 50%.': '将草原的速度提高50%。',
    'Deep Sea Exploration': '深海勘探',
    'Increases the supply limit of Ocean by 25, and unlock another synergy bonus at 40+ supply.': '将海洋的供给上限增加25，并在40+供给时释放另一个协同加成。',
    'Commodity Mastery #3': '商品掌握 #3',
    'Commodity Sales now sells 75% of their supply per cycle.': '商品销售现在每周期销售其供应量的75%。',
    'Large Capacity Barges': '大容量的驳船',
    'Increases the speed of Ocean by 100%.': '使海洋的速度增加100%。',
    'Heat Tool Synergy': '热工具协同',
    'For every other tool at 80%+ supply, your workers create +1 Heat Tool.': '每提供80%以上的其他工具，你的工人就创造+1热工具。',
    'Functional Mastery #3': '功能掌握 #3',
    'Functional Sales now sells 75% of their supply per cycle.': '功能销售现在每周期销售75%的供应量。',
    'Channel Blasting': '通道爆破',
    'Increases the speed of Mountain by 50%.': '增加山的速度50%。',
    'Widespread Demand': '广泛的需求',
    'Increases the base unit price of all resources by 50%.': '将所有资源的基本单价提高50%。',
    "Careful Clicker": "小心点击器",
    "Commodity Sales now transports 60% of their supply per cycle.": "商品销售现在每个周期运输 60% 的供应。",
    "Increases the supply limit of Prairie by 25, and unlock another synergy bonus at 40+ supply.": "将草原的供应上限提高 25，并在 40+ 供应时解锁另一个协同加成。",
    "Instantly gain 100 experience on all Prairie quadrant nodes.": "在所有草原象限节点上立即获得 100 点经验。",
    "Reduces the number of times you can click per second by 1, but doubles the cash earned from clicking.": "将您每秒可以点击的次数减少 1，但通过点击获得的现金翻倍。",
    "Silos": "筒仓",
    "Supply Chain Management": "供应链管理",
    "Food": "食物",
    "Forest": "森林",
    "Stone": "石头",
    "Prairie": "草原",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Example Upgrade #": "升级示例 #",
    "Advisory Board #": "顾问委员会 ＃",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\t速度:(.+)$/,
    /^\t供应:(.+)$/,
    /^\t工人:(.+)$/,
    /^木头 (.+)$/,
    /^升级示例 (.+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);