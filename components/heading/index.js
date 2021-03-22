import cx from 'classnames'
import PropTypes from 'prop-types'
export const Heading = ({ className, size, children }) => (
  <p className={cx(className, 'uppercase', {
    'text-lg': size == 'tiny',
    'text-xl': size == 'small',
    'text-2xl': size == 'medium',
    'text-3xl': size == 'large',
    'text-4xl': size == 'huge'
  })}>{children}</p>
)
Heading.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  children: PropTypes.element,
}