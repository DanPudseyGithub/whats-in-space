import {useCallback} from 'react'
import {AddIcon} from '@sanity/icons/Add'
import {Button, Stack} from '@sanity/ui'
import {randomKey} from '@sanity/util/content'
import {insert, type ArrayOfObjectsInputProps} from 'sanity'

export function FooterColumnsInput(props: ArrayOfObjectsInputProps) {
  const {onChange} = props

  const handleAddColumn = useCallback(() => {
    const item = {_key: randomKey(12), _type: 'footerColumn'}
    onChange(insert([item], 'after', [-1]))
  }, [onChange])

  return (
    <Stack gap={3}>
      {props.renderDefault({...props, arrayFunctions: () => null})}
      <Button icon={AddIcon} text="Add column" mode="ghost" onClick={handleAddColumn} />
    </Stack>
  )
}
