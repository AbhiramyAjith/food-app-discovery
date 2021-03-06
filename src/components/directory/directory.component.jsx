import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'HYDERABAD',
          imageUrl: 'http://theyummydelights.com/wp-content/uploads/2018/06/hyderabadi-chicken-dum-biryani.jpg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'BANGALORE',
          imageUrl: 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/4rO3Ryf4Cm.jpg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'KOCHI',
          imageUrl: 'https://www.swantour.com/blogs/wp-content/uploads/2019/04/Appam.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'EXPLORE FOOD',
          imageUrl: 'http://images.edexlive.com/uploads/user/imagelibrary/2020/3/17/original/icecream.jpg',
          id: 3,
          linkUrl: ''
        },
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
