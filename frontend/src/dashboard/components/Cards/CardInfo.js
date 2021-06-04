
import React from 'react'
import { Card, CardBody, Button } from '@windmill/react-ui'

function CardInfo({ title, value, children: icon, button }) {
  return (
    <Card className="card-item">
      <div>
        <div className="flex border-b-solid border-b-2 border-gray-200 justify-center mt-3">
        {icon}
         <div className="">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</p>
        </div>
        </div>
        <div className="text-center">
            <p className="text-lg mt-4 mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">{value}</p>
          { button ? <Button size="regular"> {button} </Button> : null } 
        </div>
      </div>
    </Card>
  )
}

export default CardInfo