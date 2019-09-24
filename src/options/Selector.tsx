import * as React from 'react'
import Option from './Option'
import Context, { OptionContext } from './OptionContext'

function getComponentOptionValue (component: React.ComponentClass) {
   const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  defaultOption: React.ComponentClass | string
  children?: React.ReactNode
}

const Selector = (props: Props) => {
  const optionContext = React.useContext<OptionContext>(Context)
  const [toggle, setToggle] = React.useState(false)

  const { option, defaultOption, children } = props

  function updateOptionValues () {
    const values = React.Children.map(children, child => {
      if (child) {
        return getComponentOptionValue((child).type)
      }
    })
    if (new Set(values).size !== values.length) {
      throw new Error('Duplicate values')
    }
    optionContext.setOptions(option.key, values)
  }

  function optionContextUpdate () {
    setToggle(!toggle)
  }

  React.useEffect(() => {
    function initialize () {
      const defaultValue = (
        typeof defaultOption === 'string' ?
        defaultOption : getComponentOptionValue(defaultOption)
      )
      optionContext.addStateChangeListener(optionContextUpdate)
      optionContext.optionEnter(option.key)
      const optionState = optionContext.getOptionState(option.key)
      updateOptionValues()
      if (optionState) {
        optionContext.setDefaultValue(option.key, defaultValue)
      }
    }

    initialize()

    return () => {
      optionContext.removeStateChangeListener(optionContextUpdate)
      optionContext.optionExit(props.option.key)
    }

  }, [])

  React.useEffect(() => {
    updateOptionValues()
  }, [props, toggle])

  let result: React.ReactNode | null = null
  const value = optionContext.getValue(option.key)
  React.Children.forEach(children, child => {
    if (child && getComponentOptionValue((child).type) === value) {
      result = child
    }
  })
  return result
}

export default Selector
