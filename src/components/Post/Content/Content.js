// @flow strict
import moment from 'moment'
import React from 'react'
import styles from './Content.module.scss'

type Props = {
  body: string,
  title: string,
  date: string,
  readingTime: string
}

const Content = ({ body, title, date, readingTime }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <p className={styles['content__date']}>
      {moment(date).format('D MMM, YYYY')} • {readingTime}
    </p>
    <div
      className={styles['content__body']}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
)

export default Content
