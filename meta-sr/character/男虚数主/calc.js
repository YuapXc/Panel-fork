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
},
{
  title: '[A-1]摇摆的礼仪伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},
{
  title: '[E-1]中场馈赠的雨指定伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: '[E-0.5]中场馈赠的雨随机单段额外伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['随机伤害'], 'e')
},
{
  title: '[E-3]中场馈赠的雨随机总额外伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.e['随机伤害'] * 4, 'e')
},
{
  title: '[E-4]中场馈赠的雨随机总额外伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.e['随机伤害'] * 6, 'e')
},{
  title: '[Q]队友击破特攻提高',
  dmg: ({ attr, talent }) => {
    return {
      avg: Math.min(talent.q['击破特攻提高'] * 100)
    }
  }
},{
  title: '[4命]队友击破特攻提高',
  check: ({ cons}) => cons > 3,
  dmgKey: 'AE',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0.15 + 30)
    }
  }
},{
  title: '因为你非4命,所以不计入排行！',
  check: ({ cons}) => cons < 4,
  dmgKey: 'AE',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0)
    }
  }
}, {
  title: '大部分情况下,角色削韧值为下',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},
{
  title: '扩号中:~为扩散,+为群攻,=为弹射,没加为单体',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},
{
  title: '[A]单攻普攻削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 1)
    }
  }
},
{
  title: '[A]单攻强化普攻削韧值(加拉赫为3)',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 2)
    }
  }
},
{
  title: '[A~]扩散强化普攻主目标削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 2)
    }
  }
},
{
  title: '[A~]扩散强化普攻相邻目标削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 1)
    }
  }
},
{
  title: '[E]单攻战技削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 2)
    }
  }
},
{
  title: '[E~]弹射战技每段削韧值(如瓦尔特)',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 0.5)
    }
  }
},
{
  title: '[E+]群攻战技削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 1)
    }
  }
},
{
  title: '[E~]扩散战技主目标削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 2)
    }
  }
},
{
  title: '[E~]扩散战技相邻目标削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 1)
    }
  }
},
{
  title: '[Q]单攻终结技削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 3)
    }
  }
},
{
  title: '[Q+]群攻终结技削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 2)
    }
  }
},
{
  title: '[Q~]扩散终结技主目标削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 2)
    }
  }
},
{
  title: '[Q~]扩散终结技相邻目标削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 2)
    }
  }
},
{
  title: '[Q=]弹射终结技首段削韧值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 1)
    }
  }
},
{
  title: '[Q=]弹射终结技后续段削韧值(如景元)',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0 + 0.5)
    }
  }
},
{
  title: '同谐主角削韧值就在上方伤害计算的扩号',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0)
    }
  }
},
{
  title: '[1名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 0.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1+0.6)
    }
  }
},
{
  title: '[1名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2+0.6)
    }
  }
},
{
  title: '[1名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3+0.6)
    }
  }
},
{
  title: '[1名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4+0.6)
    }
  }
},
{
  title: '[1名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5+0.6)
    }
  }
},
{
  title: '[1名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6+0.6)
    }
  }
},
{
  title: '[1名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7+0.6)
    }
  }
},
{
  title: '[1名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8+0.6)
    }
  }
},
{
  title: '[1名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9+0.6)
    }
  }
},
{
  title: '[1名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9.5+0.6)
    }
  }
},
{
  title: '[1名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 10+0.6)
    }
  }
},
{
  title: '[2名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 0.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1+0.5)
    }
  }
},
{
  title: '[2名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2+0.5)
    }
  }
},
{
  title: '[2名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3+0.5)
    }
  }
},
{
  title: '[2名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4+0.5)
    }
  }
},
{
  title: '[2名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5+0.5)
    }
  }
},
{
  title: '[2名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6+0.5)
    }
  }
},
{
  title: '[2名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7+0.5)
    }
  }
},
{
  title: '[2名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8+0.5)
    }
  }
},
{
  title: '[2名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9+0.5)
    }
  }
},
{
  title: '[2名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9.5+0.5)
    }
  }
},
{
  title: '[2名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 10+0.5)
    }
  }
},
{
  title: '[3名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 0.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1+0.4)
    }
  }
},
{
  title: '[3名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2+0.4)
    }
  }
},
{
  title: '[3名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3+0.4)
    }
  }
},
{
  title: '[3名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4+0.4)
    }
  }
},
{
  title: '[3名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5+0.4)
    }
  }
},
{
  title: '[3名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6+0.4)
    }
  }
},
{
  title: '[3名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7+0.4)
    }
  }
},
{
  title: '[3名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8+0.4)
    }
  }
},
{
  title: '[3名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9+0.4)
    }
  }
},
{
  title: '[3名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9.5+0.4)
    }
  }
},
{
  title: '[3名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 10+0.4)
    }
  }
},
{
  title: '[4名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 0.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1+0.3)
    }
  }
},
{
  title: '[4名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2+0.3)
    }
  }
},
{
  title: '[4名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3+0.3)
    }
  }
},
{
  title: '[4名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4+0.3)
    }
  }
},
{
  title: '[4名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5+0.3)
    }
  }
},
{
  title: '[4名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6+0.3)
    }
  }
},
{
  title: '[4名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7+0.3)
    }
  }
},
{
  title: '[4名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8+0.3)
    }
  }
},
{
  title: '[4名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9+0.3)
    }
  }
},
{
  title: '[4名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9.5+0.3)
    }
  }
},
{
  title: '[4名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 10+0.3)
    }
  }
},
{
  title: '[5名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 0.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1+0.2)
    }
  }
},
{
  title: '[5名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2+0.2)
    }
  }
},
{
  title: '[5名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 2.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3+0.2)
    }
  }
},
{
  title: '[5名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 3.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4+0.2)
    }
  }
},
{
  title: '[5名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 4.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5+0.2)
    }
  }
},
{
  title: '[5名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 5.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6+0.2)
    }
  }
},
{
  title: '[5名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 6.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7+0.2)
    }
  }
},
{
  title: '[5名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 7.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8+0.2)
    }
  }
},
{
  title: '[5名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 8.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9+0.2)
    }
  }
},
{
  title: '[5名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 9.5+0.2)
    }
  }
},
{
  title: '[5名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: false },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 10+0.2)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 0.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8.5+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9.5+0.6) + reaction('superBreak').avg * 0
    }
  }
},
{
  title: '[阮梅Buff·1名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 10+0.6+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 0.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9.5+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·2名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 10+0.5+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 0.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9.5+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·3名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 10+0.4+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 0.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9.5+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·4名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 10+0.3+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削0.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 0.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削1韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削1.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 1.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削2韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削2.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 2.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削3韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削3.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 3.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削4韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削4.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 4.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削5.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 5.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削6韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削6.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 6.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削7韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削7.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 7.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削8韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削8.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 8.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削9韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削9.5韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 9.5+0.2+0)
    }
  }
},
{
  title: '[阮梅Buff·5名敌人-削10韧]超击破伤害',
  params: { Q: true,S: true,R: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * ( 1.5 * 10+0.2+0)
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,def,cpct,cdmg'

export const buffs = [,{
  title: '阮梅：弱点击破效率提高50%，击破特攻提高20%，抗性穿透提高25%',
  check: ({ params }) => params.R === true,
  data: {
    stance: 20,
    kx: 25
  }
},{
  title: '2命：能量恢复效率提高25%',
  cons: 2,
  data: {
    recharge: 25
  }
},{
  check: ({ params,cons }) => params.Q === true,
  title: '伴舞：击破特攻提高[stance]%',
  data: {
    stance: ({ talent }) => talent.q['击破特攻提高'] * 100
  }
},{
  check: ({ params,cons }) => cons > 3 && params.S === true,
  title: '4命：击破特攻提高[stance]%',
  data: {
    stance: ({ calc,attr }) => calc(attr.stance) * 0.15 + 30
  }
},{
  check: ({ params,cons }) => params.S === true,
  title: '5.14最后修改：如有问题可联系3591754738反馈！',
  data: {
    stance: 0
  }
}]