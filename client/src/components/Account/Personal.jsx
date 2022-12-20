import React, {useContext} from 'react'
import { MainPageContext } from '../../App'

function Personal() {
   const { user } = useContext(MainPageContext);
  return (
    <div>Personal</div>
  )
}

export default Personal