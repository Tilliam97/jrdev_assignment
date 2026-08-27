import { useState, useEffect} from 'react'
import axios from 'axios'

function FormComponent() {

  return (
    <form>
      <label>Keyword:
        <input type="text" />
      </label>
    </form>
  )
}

export default FormComponent;
