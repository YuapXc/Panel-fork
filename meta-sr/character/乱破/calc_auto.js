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
},{
  title: '[A]忍术•七转八起伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]忍切•初志贯彻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[强化普攻]主目标超击破伤害',
  check: ({ cons }) => cons < 2,
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9*1*1.5*0.6
    }
  }
}, {
  title: '[强化普攻]前2段主目标超击破伤害',
  check: ({ cons }) => cons > 1,
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9*1*1.5*1.5*0.6
    }
  }
}, {
  title: '[强化普攻]后续主目标超击破伤害',
  check: ({ cons }) => cons > 1,
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9*1*1.5*0.6
    }
  }
},{
  title: '[强化普攻]相邻目标超击破伤害',
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9*0.5*1.5*0.6 //削值*结印状态效率150%*天赋60%倍率
    }
  }
},{
  title: '[T-1点充能]第3段额外击破伤害',
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*1)
    }
  }
},{
  title: '[T-5点充能]第3段额外击破伤害',
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*5)
    }
  }
},{
  title: '[T-10点充能]第3段额外击破伤害',
  dmgKey: 'AE',
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*10)
    }
  }
},{
  title: '[T-15点充能]第3段额外击破伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*15)
    }
  }
},{
  title: '[乱阮主灵]触发特效后击破特攻',
  params: { team: true, teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
},{
  title: '[乱阮主灵-强化普攻]主目标超击破伤害',
  params: { team: true, teamA: false },
  check: ({ cons }) => cons < 2,
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9*1*1.5*1.5*0.6*1.4
    }
  }
}, {
  title: '[乱阮主灵-强化普攻]前2段主目标超击破伤害',
  params: { team: true, teamA: false },
  check: ({ cons }) => cons > 1,
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9*1*1.5*1.5*1.5*0.6*1.4
    }
  }
}, {
  title: '[乱阮主灵-强化普攻]后续主目标超击破伤害',
  params: { team: true, teamA: false },
  check: ({ cons }) => cons > 1,
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9*1*1.5*1.5*0.6*1.4
    }
  }
},{
  title: '[乱阮主灵-强化普攻]相邻目标超击破伤害',
  params: { team: true, teamA: false },
  dmg: ({ trees }, { reaction }) => {
    return {//削值*结印状态效率150%*天赋60%倍率
      avg: reaction('superBreak').avg / 0.9*0.5*1.5*1.5*0.6*1.4
    }
  }
},{
  title: '[乱阮主灵-T-1点充能]第3段额外击破伤害',
  params: { team: true, teamA: false },
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*1)
    }
  }
},{
  title: '[乱阮主灵-T-5点充能]第3段额外击破伤害',
  params: { team: true, teamA: false },
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*5)
    }
  }
},{
  title: '[乱阮主灵-T-10点充能]第3段额外击破伤害',
  params: { team: true, teamA: false },
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*10)
    }
  }
},{
  title: '[乱阮主灵-T-15点充能]第3段额外击破伤害',
  check: ({ cons }) => cons > 5,
  params: { team: true, teamA: false },
  dmg: ({ talent, cons }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害'] + talent.t['击破倍率提高']*15)
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '0魂阮梅：弱点击破效率提高50%，击破特攻提高20%，抗性穿透提高25%，速度提高10%',
  check: ({ params }) => params.team === true,
  data: {
    stance: 20,
    kx: 25,
    speedPct: 10
  }
}, {
  title: '6魂钟表匠开拓者：提高击破特攻[stance]%，场上敌人数量为1时，超击破伤害提高60%。计算副目标伤害时，按3名敌人，超击破伤害提高40%计算',
  check: ({ params }) => params.team === true,
  data: {
    stance: 30 + 30 + 300 * 0.15 // 终结技30+钟表匠30+四命转化
  }
}, {
  title: '灵砂：敌方受到的击破伤害提高25%',
  check: ({ params }) => params.team === true,
  data: {
    breakEnemydmg: 25
  }
},{
  title: '1命：无视目标15%的防御。',
  cons: 1,
  data: {
    ignore: 15
  }
},{
  title: '4命：我方全体速度提高12%。',
  cons: 4,
  data: {
    speedPct: 12
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) > 2400 ,
  title: '忍法帖•枯叶：敌方目标受到的击破伤害提高[breakEnemydmg]%',
  data: {
    breakEnemydmg: ({ calc, attr }) => Math.min(8, (calc(attr.atk) - 2000 ) / 100) + 2
  }
},{
  title: '结印状态：击破特攻提高[stance]%',
  data: {
    stance: ({ talent }) => talent.q['击破特攻提高'] * 100
  }
}]

export const createdBy = 'Ehya丶Calc'
