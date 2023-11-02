---
to: apps/frontend/src/components/<%= h.inflection.dasherize(name) %>.tsx
---
import React, { PureComponent } from 'react'

export class <%= h.changeCase.pascal(name) %> extends PureComponent {
  render() {
    return (
      <div>
        <%= h.changeCase.pascal(name) %> component
      </div>
    )
  }
}
