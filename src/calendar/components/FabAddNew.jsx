import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import { addHours } from 'date-fns';


export const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handeleClickNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
      }
    })
    openDateModal();
  }

  return (
    <button
      className='btn btn-primary fab'
      onClick={handeleClickNew}
    >
      <i className='fas fa-plus'></i>
    </button>
  )
}
