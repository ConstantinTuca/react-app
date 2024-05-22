import { useState } from "react"

interface Props {
  children: string,
  maxChars?: number
}

const ExpandableText = ({children, maxChars = 100}: Props) => {
  const [showAll, setShowAll] = useState(false);

  if(children.length < maxChars) return(<div><p>{children}</p></div>);

  return (
    <div>
      {showAll ? children : children.substring(0, maxChars) + '...'}
      {children.length > maxChars} <button onClick={() => {setShowAll(!showAll)}}>{showAll ? 'Less' : 'More'}</button>
    </div>
  )
}

export default ExpandableText