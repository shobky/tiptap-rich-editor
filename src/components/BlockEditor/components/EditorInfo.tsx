import { WebSocketStatus } from '@hocuspocus/provider'
import { memo } from 'react'
import { EditorUser } from '../types'
import { cn } from '../../../lib/utils'
import { getConnectionText } from '../../../lib/utils/getConnectionText'
import Tooltip from '../../ui/Tooltip'

export type EditorInfoProps = {
  characters: number
  words: number
}

export const EditorInfo = memo(({ characters,  words }: EditorInfoProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center pr-4 mr-4 text-right border-r border-neutral-200 dark:border-neutral-800">
        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
          {words} {words === 1 ? 'word' : 'words'}
        </div>
        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
          {characters} {characters === 1 ? 'character' : 'characters'}
        </div>
      </div>
    </div>
  )
})

EditorInfo.displayName = 'EditorInfo'
