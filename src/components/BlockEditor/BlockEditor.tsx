'use client'

import { EditorContent, PureEditorContent } from '@tiptap/react'
import React, { useRef } from 'react'

import { LinkMenu } from '@/components/menus'

import { useBlockEditor } from '@/hooks/useBlockEditor'

import '@/styles/index.css'

import ImageBlockMenu from '@/extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '@/extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '@/extensions/Table/menus'
import { TiptapProps } from './types'
import { EditorHeader } from './components/EditorHeader'
import { TextMenu } from '../menus/TextMenu'

export const BlockEditor = ({ ydoc }: TiptapProps) => {
  const menuContainerRef = useRef(null)
  const editorRef = useRef<PureEditorContent | null>(null)

  const { editor, characterCount, leftSidebar } = useBlockEditor({ ydoc })

  if (!editor) {
    return null
  }

  return (
    <div>
      <div className="flex h-full" ref={menuContainerRef}>
        <div className="relative flex flex-col flex-1 h-full overflow-hidden">
          {/* <EditorHeader
            characters={characterCount.characters()}
            words={characterCount.words()}
            isSidebarOpen={leftSidebar.isOpen}
            toggleSidebar={leftSidebar.toggle}
          /> */}
          <EditorContent editor={editor} ref={editorRef} className="flex-1 overflow-y-auto min-h-[50vh]" />
          <TextMenu editor={editor} />

          {/* <LinkMenu editor={editor} appendTo={menuContainerRef} />
          <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
          <TableRowMenu editor={editor} appendTo={menuContainerRef} />
          <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
          <ImageBlockMenu editor={editor} appendTo={menuContainerRef} /> */}
        </div>
      </div>
    </div>
  )
}

export default BlockEditor
