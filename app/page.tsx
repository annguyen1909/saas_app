import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <main className='bg-amber-100'>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura The Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Neura The Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={30}
          color="#e5d0ff" />
        <CompanionCard
          id="789"
          name="Neura The Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={40}
          color="#BDE7FF" />
      </section>

      <section className='home-section'>
        <CompanionList
          title = "Recently completed sessions"
          companions = {recentSessions}
          classNames = "w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default page