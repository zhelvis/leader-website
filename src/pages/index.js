import React from 'react'

import SEO from '../components/seo'
import Intro from '../components/intro'
import About from '../components/about'
import Acm from '../components/acm'
import Partners from '../components/partners'
import GetInTouch from '../components/getInTouch'

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO 
        title="Центр Спортивной Интеграции" 
        description="Мы помогаем в организации чемпионатов, соревнований, турниров, олимпиад, спортивно-массовых мероприятий, дружеских встреч, как традиционных видов спорта, так и видов, составляющих культурное наследие народов России, Казахстана, стран Евразийского сотрудничества." 
      />
      <Intro />
      <About />
      <Acm />
      <Partners />
      <GetInTouch />
    </React.Fragment>
  )
}

export default IndexPage
