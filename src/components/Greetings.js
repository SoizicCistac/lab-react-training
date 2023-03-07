import React from 'react'

const Greetings = (props) => {
    const {lang, children} = props
    const langGreetings = (lang) => {
        if(lang === 'de'){
            return 'Hallo'
        } else if (lang === 'es'){
            return 'Hola'
        } else if (lang === 'fr'){
            return 'Bonjour'
        } else {
            return 'Hello'
        }
    }
  return (
    <div>
      {langGreetings(lang)} {children}
    </div>
  )
}

export default Greetings
