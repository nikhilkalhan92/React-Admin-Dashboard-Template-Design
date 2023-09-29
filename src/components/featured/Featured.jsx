import './featured.scss'
import { KeyboardArrowDownOutlined, MoreVertOutlined } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { KeyboardArrowUpOutlined } from '@mui/icons-material'




const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertOutlined fontSize='small' />
        </div>
        <div className='bottom'>
        <div className='featuredChart'>
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
            <p className='title'>Total Sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'> Previous transactions processing. Last payments may not be included
            </p>
            <div className='summary'>
            <div className='item'>
                <div className='itemTitle'>Target</div>
               <div className='itemResult negative'>
                <KeyboardArrowDownOutlined fontSize='small'/>
                <div className='resultAmount'>$12.4k</div>
               </div>
            </div>
            <div className='item'>
                <div className='itemTitle'>Last Week</div>
               <div className='itemResult positive'>
                <KeyboardArrowUpOutlined fontSize='small'/>
                <div className='resultAmount'>$7.2k</div>
               </div>
            </div>
            <div className='item'>
                <div className='itemTitle'>Last Month</div>
               <div className='itemResult positive'>
                <KeyboardArrowUpOutlined fontSize='small'/>
                <div className='resultAmount'>$26.6k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Featured