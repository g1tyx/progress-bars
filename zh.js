//汉化杂项
var cnItems = {
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
    'Instantly gain 250 experience on all Forest quadrant nodes.': '立即获得250经验对所有森林象限节点。',
    'Warehouse Conveyers': '仓库输送机',
    'Functional Sales now transports 60% of their supply per cycle.': '功能销售现在每周期运送60%的供应。',
    'Butcher Shop': '肉店',
    'Increase the base unit price of Livestock by $5.00.': '将牲畜的基本单价提高$5。',
    'Commodity Mastery #2': '商品掌握 ＃2',
    'Commodity Sales now sells 70% of their supply per cycle.': '商品销售现在每周期销售70％的供应。',
    'Passive Income Stream': '被动收入来源',
    'You passively generate $250.00 every 5 seconds.': '你被动地每5秒产生$250。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

};

function cnItem(text) {
    //数组里面有的，返回中文
    for (var i in cnItems) {
        if (text == i) {
            return cnItems[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cnItems) {
        if (text != i) {
            console.log("需汉化的英文Item：" + text);
            return text;
        }
    }
}



//汉化标题
var cntit = {
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    

};

function cntitle(text) {
    //数组里面有的，返回中文
    for (var i in cntit) {
        if (text == i) {
            return cntit[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cntit) {
        if (text != i) {
            console.log("需汉化的英文标题：" + text);
            return text;
        }
    }
}

