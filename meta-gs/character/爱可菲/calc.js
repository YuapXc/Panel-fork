export const details = [{
  title: '[A]后厨手艺普通攻击伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['一段伤害'] + talent.a['二段伤害'] + talent.a['三段伤害'][0] + talent.a['三段伤害'][1], 'a')
}, {
  title: '[A+]后厨手艺重击伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '[A-]后厨手艺下坠伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.a['下坠期间伤害'] + talent.a['低空/高空坠地冲击伤害'][0] + talent.a['低空/高空坠地冲击伤害'][1], 'a2')
}, {
  title: '[E]低温烹饪技能伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[E]低温烹饪融化伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.e['技能伤害'], 'e', 'melt')
}, {
  title: '[E]冻霜芭菲伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.e['冻霜芭菲伤害'], 'e')
}, {
  title: '[E]冻霜芭菲融化伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.e['冻霜芭菲伤害'], 'e', 'melt')
}, {
  title: '[Q]冻霜芭菲伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]冻霜芭菲融化伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.q['技能伤害'], 'q', 'melt')
}, {
  title: '[Q]花刀技法技能伤害',
  dmg: ({ talent, attr, cons }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: `[Q]花刀技法治疗量`,
  dmgKey: 'AE',
  dmg: ({ talent, attr, calc }, { heal }) =>
    heal(talent.q['治疗量2'][0] * calc(attr.atk) / 100 + talent.q['治疗量2'][1])
}, {
  title: `[T]康复食疗治疗量`,
  dmg: ({ talent, attr, calc }, { heal }) =>
    heal(calc(attr.atk) * 1.3824)
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg,heal'

export const buffs = [{
  title: '爱可菲被动：花刀技法治疗量提升[healPct]%',
  data: {
    healPct: 20
  }
}, {
  title: '灵感浸入调味：冰元素抗性降低5%',
  data: {
    kx: 5
  }
}, {
  check: ({ params }) => params.team === true,
  title: '队伍增益：提升全队冰元素伤害[iceDmg]%',
  data: {
    iceDmg: 15
  }
}, {
  title: '1命：造成冰元素伤害时的暴击伤害提升60%。',
  cons: 1,
  data: {
    cdmg: 60
  }
}, 'melt']

export const createdBy = 'YuapXc'
