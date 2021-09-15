// import HomeIcon from '@material-ui/icons/Home'
import { RiHome5Fill } from 'react-icons/ri'
import { RiUserSettingsLine } from 'react-icons/ri'
import { RiHandbagLine } from 'react-icons/ri'
import { RiMessage3Line } from 'react-icons/ri'
import { RiNotification3Line } from 'react-icons/ri'
const Data = [
  {
    id: 1,
    name: 'Home',
    Icon: RiHome5Fill,
    active: true,
  },
  {
    id: 2,
    name: 'My network',
    Icon: RiUserSettingsLine,
    active: false,
  },
  {
    id: 3,
    name: 'Jobs',
    Icon: RiHandbagLine,
    active: false,
  },
  {
    id: 4,
    name: 'Messaging',
    Icon: RiMessage3Line,
    active: false,
  },
  {
    id: 5,
    name: 'Notification',
    Icon: RiNotification3Line,
    active: false,
    imgIrl: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
]
export default Data
