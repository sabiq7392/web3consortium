import { useEffect } from 'react'

export default function DoWhenScroll(position) {
  useEffect(() => {
    const getInfoPosition = positionComponents.getBoundingClientRect();
    window.onscroll = () => {
      document.documentElement.scrollTop >= getInfoPosition.y ? true : false;
    }
  })
};