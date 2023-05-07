import React from 'react';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import '../styles/HomeCard.css';
import Image from  '../asstes/images/img1.png'

const { Meta } = Card;

function HomeCard() {

    return(
        <Card
        className='card-container'
    cover={
      <img alt="example" src={Image} />
    }
    actions={[
      <LikeOutlined key="like" />,
      <CommentOutlined key="comment" />
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      description="This is the description"
    />
  </Card>

    );
}

export default HomeCard;