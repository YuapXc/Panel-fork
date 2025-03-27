export const details = [{
  title: '[A1]后厨手艺一段伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
}, {
  title: '[A2]后厨手艺二段伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a')
}, {
  title: '[A3]后厨手艺三段伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a')
}, {
  title: '[A+]后厨手艺重击伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '[A-]后厨手艺下坠期间伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['下坠期间伤害'], 'a2')
}, {
  title: '[A-]后厨手艺低空下落伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][0], 'a3')
}, {
  title: '[A-]后厨手艺高空下落伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a3')
}, {
  title: '[E]低温烹饪技能伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[E]冻霜芭菲伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['冻霜芭菲伤害'], 'e')
}, {
  title: '[Q]花刀技法技能伤害',
  params: {team: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]花刀技法治疗量',
  params: {team: false},
  heal: ({ talent, attr }, heal) => heal(talent.q['治疗量'], attr.atk)
}];

export const defDmgKey = 'Q';
export const mainAttr = 'atk,cpct,cdmg,heal';

export const buffs = [{
  title: '爱可菲被动：花刀技法治疗量提升[healPct]%',
  data: {
    healPct: 20
  }
}, {
  check: ({ params }) => params.team === true,
  title: '队伍增益：提升全队冰元素伤害[iceDmg]%',
  data: {
    iceDmg: 15
  }
}];

export const createdBy = 'YuapXc';
