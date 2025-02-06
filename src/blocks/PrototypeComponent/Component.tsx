import React from 'react'

import type { Page } from '@/payload-types'

import { Variant1 } from '@/blocks/PrototypeComponent/Variant1'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'

const heroes = {
  highImpact: Variant1,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const PrototypeBlock: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
