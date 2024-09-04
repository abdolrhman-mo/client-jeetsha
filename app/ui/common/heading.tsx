interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = '',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  return (
    <Tag
      className={`text-gray-900 font-semibold capitalize ${
        level === 1 ? 'text-4xl my-12' :
        level === 2 ? 'text-3xl my-12' :
        level === 3 ? 'text-2xl my-4' :
        level === 4 ? 'text-xl my-4' :
        level === 5 ? 'text-lg my-4' : 
        'text-base'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Heading
