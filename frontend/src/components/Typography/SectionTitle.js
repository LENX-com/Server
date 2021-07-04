import React from 'react'


function SectionTitle({ children, clase }) {
  return <h2 className={`mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 ${clase? clase : ""}`}>{children}</h2>
}

export default SectionTitle

