import { useContext, useEffect, useMemo, useState } from 'react'
import { useEditor } from '@tiptap/react'
import * as Y from 'yjs'

import { ExtensionKit } from '@/extensions/extension-kit'
import { useSidebar } from './useSidebar'

export const useBlockEditor = ({ ydoc }: { ydoc: Y.Doc }) => {
  const leftSidebar = useSidebar()

  const editor = useEditor(
    {
      autofocus: true,
      extensions: [...ExtensionKit({})],
      editorProps: {
        attributes: {
          autocomplete: 'off',
          autocorrect: 'off',
          autocapitalize: 'off',
          class: 'min-h-full',
        },
      },
    },
    [ydoc],
  )

  const characterCount = editor?.storage.characterCount || { characters: () => 0, words: () => 0 }

  // @ts-ignore
  window.editor = editor

  return { editor, characterCount, leftSidebar }
}
