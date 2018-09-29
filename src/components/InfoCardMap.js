import { Card, CardTitle } from 'react-materialize'
import React from 'react';

const InfoCard = (props) => {
    console.log('this props inside InfoCard', props)
    const { image_url, title, description, min_age, max_age, start_date, end_date } = props.event
    return (
        <Card className='small'
            header={<CardTitle image={image_url}>{title}</CardTitle>}
            actions={[<a href='#'>Check out this event!</a>]}>
            {description}
        </Card>
    )
}

export default InfoCard