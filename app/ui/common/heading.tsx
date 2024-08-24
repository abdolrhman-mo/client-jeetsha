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
        level === 1 ? 'text-4xl mb-4' :
        level === 2 ? 'text-3xl mb-3' :
        level === 3 ? 'text-2xl mb-2' :
        level === 4 ? 'text-xl mb-2' :
        level === 5 ? 'text-lg mb-2' : 
        'text-base'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Heading
