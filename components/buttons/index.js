import PropTypes from 'prop-types'
import cx from 'classnames'
export const Button = ({ text, type, size, icon, onClick }) => {
  const common = "bg-red-500 hover:bg-red-600 text-white items-center uppercase flex"
  return (
    <>
      {!text && icon &&
        <button onClick={onClick} className={cx(common, 'rounded-full justify-center p-0', { 'text-xs h-6 w-6': size == 'small', 'text-base h-10 w-10': size == 'large', 'h-8 w-8 text-xs': !size })}>
          {icon}
        </button>
      }
      {!type && text &&
        <button onClick={onClick} className={cx(common, 'font-bold', { 'text-xs px-2 py-1': size == 'small', 'text-base px-6 py-3': size == 'large', 'px-4 py-2 text-xs': !size })}>
          <span className="mr-2">{icon}</span>
          <span>{text}</span>
        </button>}
      {type == 'rounded' && text && <button onClick={onClick} className={cx(common, 'rounded-lg font-bold', { 'text-xs px-2 py-1': size == 'small', 'px-4 py-2 text-xs': !size })
      }>
        <span className="mr-2">{icon}</span>
        <span>{text}</span>
      </button>}
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['default', 'rounded']),
  size: PropTypes.oneOf(['deafult', 'small', 'large']),
  icon: PropTypes.element,
  onClick: PropTypes.func
}


export const OutlineButton = ({ text, type, size, icon, onClick }) => {
  const common = "border border-red-500 bg-transparent hover:text-red-600 hover:border-red-600 text-red-500 uppercase flex items-center"
  return (
    <>
      {!text && icon &&
        <button onClick={onClick} className={
          cx(common,
            'text-xs h-8 w-8 rounded-full justify-center p-0', { 'text-xs h-6 w-6': size == 'small', 'text-base h-10 w-10': size == 'large', 'h-8 w-8 text-xs': !size }

          )}>
          {icon}
        </button>
      }
      {!type && text && <button onClick={onClick} className={
        cx(common, 'font-bold', { 'text-xs px-2 py-1': size == 'small', 'text-base px-6 py-2': size == 'large', 'px-4 py-2 text-xs': !size })}>
        <span className="mr-2">{icon}</span>
        <span>{text}</span>
      </button>}
      {type == 'rounded' && text && <button onClick={onClick} className={cx(common, 'rounded-lg font-bold', { 'text-xs px-2 py-1': size == 'small', 'text-base px-6 py-3': size == 'large', 'px-4 py-2 text-xs': !size })}>
        <span className="mr-2">{icon}</span>
        <span>{text}</span>
      </button>}
    </>
  )
}

OutlineButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['default', 'rounded']),
  size: PropTypes.oneOf(['deafult', 'small', 'large']),
  icon: PropTypes.element,
  onClick: PropTypes.func
}

export const FlatButton = ({ text, size, icon, onClick }) => {
  const common = "bg-transparent hover:text-red-600 text-red-500 uppercase flex"
  return (
    <>
      {!text && icon &&
        <button onClick={onClick} className={cx(common, 'text-xs h-8 w-8 items-center justify-center p-0')}>
          {icon}
        </button>
      }
      {text && <button onClick={onClick} className={cx(common, 'items-center font-bold', { 'text-xs px-2 py-1': size == 'small', 'text-base px-6 py-3': size == 'large', 'px-4 py-2 text-xs': !size })}>
        <span className="mr-2">{icon}</span>
        <span>{text}</span>
      </button>}
    </>
  )
}

FlatButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['deafult', 'small', 'large']),
  icon: PropTypes.element,
  onClick: PropTypes.func
}
