import './App.css'

import { Button, Card, Col, Row } from 'antd'
import logoUrl from '~/assets/logo.png'

export type Message = {
  type:
    | 'url-to-markdown'
    | 'url-to-html'
    | 'url-to-pdf'
    | 'url-to-image'
    | 'url-to-qrcode'
    | 'url-to-text'
    | 'url-to-json'
    | 'url-to-xml'
}

export default function App() {
  const handleClick = (type: Message['type']) => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      const activeTab = tabs[0]
      const tid = activeTab?.id ?? -1

      if (activeTab && tid > 0) {
        browser.runtime.sendMessage({
          type,
        } as Message)
      }
    })
  }

  const list = [
    {
      title: 'URL to Markdown',
      onClick: () => handleClick('url-to-markdown'),
    },
    {
      title: 'URL to HTML',
      onClick: () => handleClick('url-to-html'),
    },
    {
      title: 'URL to PDF',
      onClick: () => handleClick('url-to-pdf'),
    },
    {
      title: 'URL to Image',
      onClick: () => handleClick('url-to-image'),
    },
    {
      title: 'URL to QR Code',
      onClick: () => handleClick('url-to-qrcode'),
    },
    {
      title: 'URL to Text',
      onClick: () => handleClick('url-to-text'),
    },
    {
      title: 'URL to JSON',
      onClick: () => handleClick('url-to-json'),
    },
    {
      title: 'URL to XML',
      onClick: () => handleClick('url-to-xml'),
    },
  ]

  return (
    <Card
      title={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={logoUrl}
            alt="URL to Any"
            style={{ width: 28, height: 28, marginRight: 4 }}
          />
          <span>URL to Any</span>
        </div>
      }
    >
      <p style={{ marginBottom: 24, marginTop: 0 }}>
        Click to convert current url to any format you want.
      </p>

      <Row gutter={[32, 16]}>
        {list.map((item, index) => (
          <Col span={12} key={index}>
            <Button block onClick={item.onClick}>
              {item.title}
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
  )
}
