/*
 * SPDX-FileCopyrightText: 2021 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import '../support/index'

describe('Links Intro', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('History', () => {
    cy.getById('navLinkHistory').click()
    cy.url().should('include', '/history')
    cy.getById('navLinkIntro').click()
    cy.url().should('include', '/intro')
  })

  describe('Menu Buttons logged out', () => {
    beforeEach(() => {
      cy.logout()
    })

    it('New guest note', () => {
      cy.getById('new-guest-note-button').click()
      cy.url().should('include', '/new')
    })
  })

  describe('Menu Buttons logged in', () => {
    it('New note', () => {
      cy.getById('new-note-button').click()
      cy.url().should('include', '/new')
    })

    describe('User Menu', () => {
      beforeEach(() => {
        cy.getById('user-dropdown').click()
      })

      it('Features', () => {
        cy.getById('user-dropdown-features-button').click()
        cy.url().should('include', '/features')
      })

      it('Profile', () => {
        cy.getById('user-dropdown-profile-button').click()
        cy.url().should('include', '/profile')
      })
    })
  })
})
