import React from 'react'
import './FormerMembers.css'
import sampleMember from '../../../assets/sampleAlumni.png'
import allMembers from '../../../../data/members.json'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

export const FormerMembers = () => {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //     image="/static/images/cards/contemplative-reptile.jpg"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>


    // <div className="memberContainer">
    //   {allMembers.formerMembers.map((member, index) => (
    //     <div className="memberCard" key={index}>
    //       <div
    //         className="memberImage"
    //         style={{
    //           backgroundImage: `url("${member.image_url || sampleMember}")`,
    //           backgroundSize: 'cover',
    //           backgroundPosition: 'center',
    //         }}
    //       ></div>
    //       <div className="memberDesc">
    //         <div className="memberName">{member.name || ''}</div>
    //         <div className="researchArea">
    //           <b>Research Area:</b> {member.reserach_area || ''}
    //           <br/>
    //           <h4>Ph.D:</h4> {member.completed_at || ''}
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="alumniSection">
  <h2 className="sectionTitle">Our Alumni</h2>
  <div className="memberContainer">
    {allMembers.formerMembers.map((member, index) => (
      <div className="memberCard" key={index}>
        <div
          className="memberImage"
          style={{
            backgroundImage: `url("${member.image_url || sampleMember}")`,
          }}
        />
        <div className="memberDesc">
          <div className="memberName">{member.name || ''}</div>
          <div className="researchArea">
            <p className='member-additional-details'><strong>Research Area:</strong> {member.reserach_area || ''}</p>
            <p className='member-additional-details'><strong>Ph.D:</strong> {member.completed_at || ''}</p>
            <p className='member-additional-details'><strong>Designation: </strong> {member.designation || ''}</p>
            <p className='member-additional-details'><strong>Where are they now: </strong> {member.where_now || ''}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}
