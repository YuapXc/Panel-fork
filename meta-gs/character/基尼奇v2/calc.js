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
  title: '[E]环绕射击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['环绕射击伤害'], 'e')
}, {
  title: '[E]0层·迴猎贯鳞炮伤害',
  params: { C: true,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[E]1层·迴猎贯鳞炮伤害',
  params: { A: true,B: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[E]2层·迴猎贯鳞炮伤害',
  params: { B: true,A: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[Q]解放圣龙力量伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[Q]激光伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['激光伤害'], 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  check: ({ params }) => params.A === true,
  title: '焰灵的契约：提升迴猎贯鳞炮造成的伤害[ePlus]点',
  data: {
    ePlus: ({ calc, attr }) => calc(attr.atk) * 3.2
  }
},{
  check: ({ params }) => params.B === true,
  title: '焰灵的契约：提升迴猎贯鳞炮造成的伤害[ePlus]点',
  data: {
    ePlus: ({ calc, attr }) => calc(attr.atk) * 6.4
  }
},{
  check: ({ params , cons }) => cons > 0 && params.C === true,
  title: '1命：迴猎贯鳞炮的暴击伤害提升90%',
  data: {
    cdmg: 90
  }
},{
  check: ({ params , cons }) => ( cons > 1 ),
  title: '2命：敌人的草元素抗性降低30%',
  data: {
    kx: 30
  }
}]
