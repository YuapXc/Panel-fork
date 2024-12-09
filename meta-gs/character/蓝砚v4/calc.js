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
  title: '触发特效后护盾强效',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.shield) * 1)
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
  title: '[E]翦月环伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['翦月环伤害'], 'e')
},{
  title: '[E]凤缕护盾量',
  dmgKey: 'AE',
  dmg: ({ attr, calc, talent }, { shield }) => shield(talent.e['护盾吸收量2'][1] + calc(attr.atk) * talent.e['护盾吸收量'] / 100, 'e')
},{
  title: '[Q]鹍弦踏月出伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  title: '苍翎镇邪敕符：元素战技伤害提升[ePlus]%,元素爆发伤害提升[qPlus]%',
  data: {
    ePlus: ({ calc, attr }) => Math.min(calc(attr.mastery) * 3.09),
    qPlus: ({ calc, attr }) => Math.min(calc(attr.mastery) * 7.74)
  }
},{
  title: '4命：元素精通提升60点',
  cons: 4,
  data: {
    mastery: 60
  }
}]
