import React from 'react'

// Component for rendering the contact form on the page when 'ota yhteyttä' is pressed

const ContactForm = ({ handleNewFeedback, fname, sname, fback, setFname, setSname, setFback }) => {
  return (
    <div class='contactForm'>
      <form onSubmit={handleNewFeedback}>
        <label for={'fname'}>Etunimi</label>
        <input
          type={'text'}
          value={fname}
          id={'fname'}
          name={'firstname'}
          onChange={({ target }) => setFname(target.value)}
        />
        <label for={'lname'}>Sukunimi</label>
        <input
          type={'text'}
          id={'lname'}
          value={sname}
          name={'lastname'}
          onChange={({ target }) => setSname(target.value)}
        />
        <label for={'subject'}>Mitä haluat kertoa?</label>
        <textarea
          id={'subject'}
          name={'subject'}
          value={fback}
          style={{ height:'100px' }}
          onChange={({ target }) => setFback(target.value)}
        />
        <input type={'submit'} value={'Lähetä'} />
      </form>
    </div>
  )
}

export default ContactForm