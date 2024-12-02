export const details = [{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '当前战意值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 0 + 200)
    }
  }
},{
  title: '[E]启动伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['启动伤害'], 'e')
},{
  title: '[E]脱手武器间隔伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['脱手武器间隔伤害'], 'e')
},{
  title: '[E]驰轮车普攻一段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻一段伤害'], 'e')
},{
  title: '[E]驰轮车普攻二段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻二段伤害'], 'e')
},{
  title: '[E]驰轮车普攻三段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻三段伤害'], 'e')
},{
  title: '[E]驰轮车普攻四段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻四段伤害'], 'e')
},{
  title: '[E]驰轮车普攻五段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻五段伤害'], 'e')
},{
  title: '[E]驰轮车冲刺伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车冲刺伤害'], 'e')
},{
  title: '[E]驰轮车重击循环伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车重击循环伤害'], 'a2')
},{
  title: '[E]驰轮车重击终结伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车重击终结伤害'], 'a2')
},{
  title: '[E]驰轮车下落坠击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车下落坠击伤害'], 'a3')
},{
  title: '[Q]坠日斩伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['坠日斩伤害'], 'q')
},{
  title: '当前战意值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 0 + 200)
    }
  }
},{
  title: '[E]启动蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['启动伤害'], 'e', 'vaporize')
},{
  title: '[E]脱手武器间隔蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['脱手武器间隔伤害'], 'e', 'vaporize')
},{
  title: '[E]驰轮车普攻一段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻一段伤害'], 'a', 'vaporize')
},{
  title: '[E]驰轮车普攻二段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻二段伤害'], 'a', 'vaporize')
},{
  title: '[E]驰轮车普攻三段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻三段伤害'], 'a', 'vaporize')
},{
  title: '[E]驰轮车普攻四段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻四段伤害'], 'a', 'vaporize')
},{
  title: '[E]驰轮车普攻五段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻五段伤害'], 'a', 'vaporize')
},{
  title: '[E]驰轮车冲刺蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车冲刺伤害'], 'e', 'vaporize')
},{
  title: '[E]驰轮车重击循环蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车重击循环伤害'], 'a2', 'vaporize')
},{
  title: '[E]驰轮车重击终结蒸发伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车重击终结伤害'], 'a2', 'vaporize')
},{
  title: '[E]驰轮车下落坠击蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车下落坠击伤害'], 'a3', 'vaporize')
},{
  title: '[Q]爆发蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['坠日斩伤害'], 'q', 'vaporize')
},{
  title: '当前战意值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 0 + 200)
    }
  }
},{
  title: '[E]启动融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['启动伤害'], 'e', 'melt')
},{
  title: '[E]脱手武器间隔融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['脱手武器间隔伤害'], 'e', 'melt')
},{
  title: '[E]驰轮车普攻一段融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻一段伤害'], 'a', 'melt')
},{
  title: '[E]驰轮车普攻二段融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻二段伤害'], 'a', 'melt')
},{
  title: '[E]驰轮车普攻三段融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻三段伤害'], 'a', 'melt')
},{
  title: '[E]驰轮车普攻四段融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻四段伤害'], 'a', 'melt')
},{
  title: '[E]驰轮车普攻五段融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车普攻五段伤害'], 'a', 'melt')
},{
  title: '[E]驰轮车冲刺融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车冲刺伤害'], 'e', 'melt')
},{
  title: '[E]驰轮车重击循环融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车重击循环伤害'], 'a2', 'melt')
},{
  title: '[E]驰轮车重击终结融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车重击终结伤害'], 'a2', 'melt')
},{
  title: '[E]驰轮车下落坠击融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰轮车下落坠击伤害'], 'a3', 'melt')
},{
  title: '[Q]爆发融化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['坠日斩伤害'], 'q', 'melt')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '死生之炉：获得[aPlus]点驰轮车普攻加成值',
  data: {
    aPlus: ({ talent, attr, calc }) => (calc(attr.atk) * talent.q['驰轮车普攻加成值'] / 100)*200
  }
},{
  title: '死生之炉：获得[a2Plus]点驰轮车重击加成值',
  data: {
    a2Plus: ({ talent, attr, calc }) => (calc(attr.atk) * talent.q['驰轮车重击加成值'] / 100)*200
  }
},{
  title: '死生之炉：获得[qPlus]点坠日斩伤害加成',
  data: {
    qPlus: ({ talent, attr, calc }) => (calc(attr.atk) * talent.q['坠日斩伤害加成'] / 100)*200
  }
},{
  title: '炎花献礼：攻击力提升30%',
  data: {
    atkPct: 30
  }
},{
  title: '基扬戈兹：造成的伤害提升40%',
  data: {
    dmg: 40
  }
},{
  title: '1命：提升40%攻击力',
  cons: 1,
  data: {
    atkPct: 40
  }
},{
  title: '2命：提高300点基础攻击力,获得[aPlus]点驰轮车普攻加成值,获得[a2Plus]点驰轮车重击加成值,获得[qPlus]点元素爆发燔天之时加成值',
  cons: 2,
  data: {
    atk: 300,
    aPlus: ({ talent, attr, calc }) => calc(attr.atk) * 0.6,
    a2Plus: ({ talent, attr, calc }) => calc(attr.atk) * 0.9,
    qPlus: ({ talent, attr, calc }) => calc(attr.atk) * 1.2
  }
},{
  title: '4命：获得10%伤害加成。',
  cons: 4,
  data: {
    dmg: 10
  }
}]
