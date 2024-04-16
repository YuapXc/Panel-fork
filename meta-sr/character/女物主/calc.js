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
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
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
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
    }
  }
},{
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},
{
  title: '[A]再见安打伤害',
  params: {T:false,teamA:false,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},
{
  title: '[E]安息全垒打伤害',
  params: {T:true,teamA:false,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: '[Q]全胜•再见安打伤害',
  params: {T:false,teamA:false,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['再见安打'], 'q')
},
{
  title: '[Q]全胜•安息全垒打主目标伤害',
  params: {T:true,teamA:false,teamB:false},
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['主目标'], 'q')
},
{
  title: '[Q]全胜•安息全垒打相邻目标伤害',
  params: {T:true,teamA:false,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['相邻目标'], 'q')
},
{
  title: '[主停驭藿-A]再见安打伤害',
  params: {T:false,teamA:true,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},
{
  title: '[主停驭藿-E]安息全垒打伤害',
  params: {T:true,teamA:true,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: '[主停驭藿-Q]全胜•再见安打伤害',
  params: {T:false,teamA:true,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['再见安打'], 'q')
},
{
  title: '[主停驭藿-Q]全胜•安息全垒打主目标伤害',
  params: {T:true,teamA:true,teamB:false},
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['主目标'], 'q')
},
{
  title: '[主停驭藿-Q]全胜•安息全垒打相邻目标伤害',
  params: {T:true,teamA:true,teamB:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['相邻目标'], 'q')
}]

export const mainAttr = 'atk,cpct,cdmg,speed'
export const defDmgKey = 'AE'

export const buffs = [
{
  title: '牵制盗垒：攻击力提高[atkPct]%',
  data: {
    atkPct: ({ talent }) => talent.t['攻击力提高'] * 200
  }
},
{
  check: ({ cons, params }) =>  params.T === true,
  title: '斗志：施放战技或终结技【全胜•安息全垒打】时，对指定敌方目标造成的伤害提高25%。',
  data: {
    dmg: 25
  }
},
{
  title: '坚韧：防御力提高20%',
  data: {
    defPct: 20
  }
},
{
  title: '4命：击中处于弱点击破状态的敌方目标时，暴击率提高25%。',
  cons: 4,
  data: {
    cpct: 25
 }
},{
  check: ({ cons, params }) =>  params.teamA === true,
  title: '停云 祥音和韵：攻击力提升[atkPct]%',
  data: {
    atkPct: 25
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '停云 云光覆仪祷：造成的伤害提升[dmg]%',
  data: {
    dmg: 50
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '停云光锥 镂月裁云之意⁵：暴击伤害提升[cdmg]%',
  data: {
    cdmg: 24
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '驭空 天阙鸣弦：攻击力提升[atkPct]%',
  data: {
    atkPct: 88
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '驭空 贯云饮羽：暴击率提升[cpct]%',
  data: {
    cpct: 29.4
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '驭空 贯云饮羽：暴击伤害提升[cdmg]%',
  data: {
    cdmg: 70.2
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '驭空光锥 镂月裁云之意⁵：暴击伤害提升[cdmg]%',
  data: {
    cdmg: 24
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '藿藿 遣神役鬼：攻击力提升[atkPct]%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '藿藿 惊魂夜：攻击力提升[atkPct]%',
  data: {
    atkPct: 12
  }
}]
