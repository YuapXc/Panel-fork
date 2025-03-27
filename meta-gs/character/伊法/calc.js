export const details = [{
  title: '[A]普通攻击伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['一段伤害'] + talent.a['二段伤害'] + talent.a['三段伤害'], 'a')
}, {
  title: '[A]重击伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['重击伤害'], 'a')
}, {
  title: '[A]下坠期间伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['下坠期间伤害'], 'a')
}, {
  title: '[A]低空坠地冲击伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][0], 'a')
}, {
  title: '[A]高空坠地冲击伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a')
}, {
  title: '[E]秘药弹伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.e['秘药弹伤害'], 'e')
}, {
  title: `[E]秘药弹命中治疗量`,
  dmgKey: 'AE',
  dmg: ({ talent, attr, calc }, { heal }) =>
    heal(talent.e['秘药弹命中治疗量2'][0] * calc(attr.mastery) / 100 + talent.e['秘药弹命中治疗量2'][1])
}, {
  title: '[Q]复合镇静域伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]镇静标记伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.q['镇静标记伤害'], 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg,heal'

export const buffs = [{
  title: '互助救援协议：元素精通提升80点',
  data: {
    mastery: 80
  }
}, {
  title: '4命：元素精通提升100点',
  cons: 4,
  data: {
    mastery: 100
  }
}, {
  title: '6命：秘药弹额外伤害提升20%',
  cons: 6,
  data: {
    dmg: 20
  }
}, {
  title: '被动天赋：扩散反应伤害提升20%',
  data: {
    swirlDmg: 20
  }
}]

export const createdBy = 'YuapXc'
