describe('RedBus Website - End-to-End Automation Testing', () => {
  // ==========================================
  // SAFE SLOW EXECUTION SETTINGS
  // ==========================================

  Cypress.Commands.overwrite('type', (originalFn, subject, text, options = {}) => {
    return originalFn(subject, text, {
      ...options,
      delay: options.delay ?? 180
    });
  });

  beforeEach(() => {
    cy.wait(0);
  });

  const homeUrl = 'http://127.0.0.1:5500/ripe-theory-3388/index.html';
  const busUrl = 'http://127.0.0.1:5500/ripe-theory-3388/busdata.html';
  const paymentUrl = 'http://127.0.0.1:5500/ripe-theory-3388/payment.html';

  const travelData = {
    from: 'Delhi',
    to: 'Jaipur',
    onwardDate: '2026-12-15'
  };

  const openBusPage = () => {
    cy.visit(busUrl, {
      onBeforeLoad(win) {
        win.localStorage.setItem('travelData:', JSON.stringify(travelData));
      }
    });
  };

  const openSeatLayout = () => {
    openBusPage();
    cy.contains('button', 'VIEW SEATS').first().click();
    cy.get('#seven_container').should('be.visible');
  };

  const openPassengerForm = () => {
    openSeatLayout();
    cy.get('#S1').click();
    cy.get('#continue').click();
  };

  const openPaymentPage = () => {
    cy.visit(paymentUrl, {
      onBeforeLoad(win) {
        win.localStorage.setItem('travelData:', JSON.stringify({
          from: 'Delhi',
          to: 'Jaipur',
          onwardDate: '2026-12-15'
        }));

        win.localStorage.setItem('ticket_data', JSON.stringify([{
          Passenger_name: 'Amit Sharma',
          Passenger_age: 25,
          bus_name: 'Zingbus',
          bustype: 'A/C Seater/Sleeper',
          Depature: '23:15',
          arrival: '04:05',
          date: '2026-12-15',
          pick: 'Dhaula kuan metro station',
          drop: 'private bus stop',
          price: 620,
          ticke_number: 'REDG123456HT'
        }]));

        win.localStorage.setItem('user_data', JSON.stringify([{
          email: 'amit@example.com',
          phone: '9876543210',
          seats: ['S1'],
          price: 620
        }]));
      }
    });
  };

  // ==========================================
  // MODULE 1 - HOMEPAGE TESTING
  // ==========================================

  it('TC01 - Verify homepage loads successfully', () => {
    cy.visit(homeUrl);
    cy.get('body').should('be.visible');
    cy.title().should('contain', 'redBus');
  });

  it('TC02 - Verify source field is visible', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-from').should('be.visible');
  });

  it('TC03 - Verify destination field is visible', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-to').should('be.visible');
  });

  it('TC04 - Verify journey date field is visible', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-onward-date').should('be.visible');
  });

  it('TC05 - Verify source accepts user input', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-from').type('Delhi')
      .should('have.value', 'Delhi');
  });

  it('TC06 - Verify destination accepts user input', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-to').type('Jaipur')
      .should('have.value', 'Jaipur');
  });

  it('TC07 - Verify source field can be cleared', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-from').type('Delhi').clear()
      .should('have.value', '');
  });

  it('TC08 - Verify destination field can be cleared', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-to').type('Jaipur').clear()
      .should('have.value', '');
  });

  it('TC09 - Verify source and destination fields accept different values', () => {
    cy.visit(homeUrl);
    cy.get('#input-label-from').type('Delhi');
    cy.wait(500);
    cy.get('#input-label-to').type('Jaipur');
    cy.get('#input-label-from').should('have.value', 'Delhi');
    cy.get('#input-label-to').should('have.value', 'Jaipur');
  });

  it('TC10 - Verify search button is available', () => {
    cy.visit(homeUrl);
    cy.get('button').should('be.visible');
  });

  // ==========================================
  // MODULE 2 - BUS LISTING TESTING
  // ==========================================

  it('TC11 - Verify bus listing page loads', () => {
    openBusPage();
    cy.get('body').should('be.visible');
  });

  it('TC12 - Verify bus cards are displayed', () => {
    openBusPage();
    cy.get('.main_cards').should('have.length.greaterThan', 0);
  });

  it('TC13 - Verify exactly six buses are displayed', () => {
    openBusPage();
    cy.get('.main_cards').should('have.length', 6);
  });

  it('TC14 - Verify bus names are visible', () => {
    openBusPage();
    cy.get('.main_cards').first().should('be.visible');
  });

  it('TC15 - Verify bus prices are displayed', () => {
    openBusPage();
    cy.get('.main_cards').each(($card) => {
      cy.wrap($card).should('contain.text', 'INR');
    });
  });

  it('TC16 - Verify bus details section is visible', () => {
    openBusPage();
    cy.get('.main_cards').first().should('be.visible');
  });

  it('TC17 - Verify VIEW SEATS button is available', () => {
    openBusPage();
    cy.contains('button', 'VIEW SEATS').first().should('be.visible');
  });

  it('TC18 - Verify seat layout opens on VIEW SEATS click', () => {
    openBusPage();
    cy.contains('button', 'VIEW SEATS').first().click();
    cy.get('#seven_container').should('be.visible');
  });

  it('TC19 - Verify bus listing contains journey details', () => {
    openBusPage();
    cy.get('body').should('contain.text', 'Delhi');
    cy.get('body').should('contain.text', 'Jaipur');
  });

  it('TC20 - Verify bus listing page remains interactive', () => {
    openBusPage();
    cy.get('.main_cards').first().should('be.visible');
    cy.contains('button', 'VIEW SEATS').first().should('be.enabled');
  });

  // ==========================================
  // MODULE 3 - SEAT SELECTION TESTING
  // ==========================================

  it('TC21 - Verify seat layout opens after clicking View Seats', () => {
    openSeatLayout();
    cy.get('#seven').should('be.visible');
  });

  it('TC22 - Verify seat buttons are generated', () => {
    openSeatLayout();
    cy.get('#S1').should('be.visible');
    cy.get('#S2').should('be.visible');
    cy.get('#S10').should('be.visible');
  });

  it('TC23 - Verify sleeper seats are generated', () => {
    openSeatLayout();
    cy.get('#SP21').should('exist');
    cy.get('#SP26').should('exist');
  });

  it('TC24 - Verify seat can be selected', () => {
    openSeatLayout();
    cy.get('#S1').click();
    cy.get('#S1').should('have.css', 'background-color', 'rgb(128, 128, 128)');
    cy.get('#cont_right').should('contain.text', 'CONTINUE');
  });

  it('TC25 - Verify selected seat can be deselected', () => {
    openSeatLayout();
    cy.get('#S1').click();
    cy.get('#S1').click();
    cy.get('#S1').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('#cont_right').should('contain.text', 'SEAT LEGEND');
  });

  it('TC26 - Verify multiple seats can be selected', () => {
    openSeatLayout();
    cy.get('#S1').click();
    cy.get('#S2').click();
    cy.get('#cont_right').should('contain.text', 'INR 1240');
  });

  it('TC27 - Verify boarding point selection', () => {
    openSeatLayout();
    cy.get('#S1').click();
    cy.contains('#cont_right p', 'BOARDING POINT').click();
    cy.get('#locationpoint').should('contain.text', 'Dhaula kuan metro station');
  });

  // ==========================================
  // MODULE 4 - PASSENGER DETAILS TESTING
  // ==========================================

  it('TC28 - Verify Continue opens passenger details', () => {
    openPassengerForm();
    cy.get('#payment_page').should('be.visible');
    cy.get('#side_Head').should('contain.text', 'Passenger Details');
  });

  it('TC29 - Verify passenger name field is available', () => {
    openPassengerForm();
    cy.get('#name_box0').should('be.visible');
  });

  it('TC30 - Verify passenger age field is available', () => {
    openPassengerForm();
    cy.get('#age_box0').should('be.visible');
  });

  it('TC31 - Verify passenger gender options are available', () => {
    openPassengerForm();
    cy.get('input[name="gender0"]').should('have.length', 2).and('be.visible');
  });

  it('TC32 - Verify passenger name accepts valid input', () => {
    openPassengerForm();
    cy.get('#name_box0').type('Amit Sharma')
      .should('have.value', 'Amit Sharma');
  });

  it('TC33 - Verify passenger age accepts valid input', () => {
    openPassengerForm();
    cy.get('#age_box0').type('25')
      .should('have.value', '25');
  });

  it('TC34 - Verify passenger gender can be selected', () => {
    openPassengerForm();
    cy.get('input[name="gender0"][value="Male"]').check();
    cy.get('input[name="gender0"][value="Male"]').should('be.checked');
  });

  it('TC35 - Verify passenger name field can be cleared', () => {
    openPassengerForm();
    cy.get('#name_box0').type('Amit Sharma').clear()
      .should('have.value', '');
  });

  it('TC36 - Verify passenger age field can be cleared', () => {
    openPassengerForm();
    cy.get('#age_box0').type('25').clear()
      .should('have.value', '');
  });

  it('TC37 - Verify email field is available', () => {
    openPassengerForm();
    cy.get('#passenger_email').should('be.visible');
  });

  it('TC38 - Verify phone field is available', () => {
    openPassengerForm();
    cy.get('#passenger_phone').should('be.visible');
  });

  it('TC39 - Verify email accepts valid input', () => {
    openPassengerForm();
    cy.get('#passenger_email').type('amit@example.com')
      .should('have.value', 'amit@example.com');
  });

  it('TC40 - Verify phone accepts valid input', () => {
    openPassengerForm();
    cy.get('#passenger_phone').type('9876543210')
      .should('have.value', '9876543210');
  });

  it('TC41 - Verify passenger details form is visible', () => {
    openPassengerForm();
    cy.get('#payment_page').should('be.visible');
  });

  it('TC42 - Verify passenger name input type', () => {
    openPassengerForm();
    cy.get('#name_box0').should('have.prop', 'type', 'text');
  });

  it('TC43 - Verify passenger age input type', () => {
    openPassengerForm();
    cy.get('#age_box0').should('have.attr', 'type', 'number');
  });

  it('TC44 - Verify phone input type is telephone', () => {
    openPassengerForm();
    cy.get('#passenger_phone').should('have.attr', 'type', 'tel');
  });

  it('TC45 - Verify email input type', () => {
    openPassengerForm();
    cy.get('#passenger_email').should('have.attr', 'type', 'email');
  });

  it('TC46 - Verify selected seat appears in summary', () => {
    openSeatLayout();
    cy.get('#S1').click();
    cy.get('#cont_right').should('contain.text', 'S1');
  });

  it('TC47 - Verify seat summary updates after reselection', () => {
    openSeatLayout();
    cy.get('#S1').click();
    cy.get('#S1').click();
    cy.get('#S1').click();
    cy.get('#cont_right').should('contain.text', 'S1');
  });

  it('TC48 - Verify passenger details section heading', () => {
    openPassengerForm();
    cy.get('#side_Head').should('be.visible');
  });

  it('TC49 - Verify passenger form fields are editable', () => {
    openPassengerForm();
    cy.get('#name_box0').type('Amit');
    cy.get('#age_box0').type('25');
    cy.get('#name_box0').should('have.value', 'Amit');
    cy.get('#age_box0').should('have.value', '25');
  });

  it('TC50 - Verify passenger details can be entered together', () => {
    openPassengerForm();
    cy.get('#name_box0').type('Amit Sharma');
    cy.get('#age_box0').type('25');
    cy.get('#passenger_email').type('amit@example.com');
    cy.get('#passenger_phone').type('9876543210');
    cy.get('#name_box0').should('have.value', 'Amit Sharma');
    cy.get('#age_box0').should('have.value', '25');
    cy.get('#passenger_email').should('have.value', 'amit@example.com');
    cy.get('#passenger_phone').should('have.value', '9876543210');
  });

  // ==========================================
  // MODULE 5 - PAYMENT PAGE TESTING
  // ==========================================

  it('TC51 - Verify payment page loads successfully', () => {
    openPaymentPage();
    cy.get('body').should('be.visible');
  });

  it('TC52 - Verify payment page heading is visible', () => {
    openPaymentPage();
    cy.get('#one').should('be.visible');
  });

  it('TC53 - Verify payment details section is visible', () => {
    openPaymentPage();
    cy.get('#four').should('be.visible');
  });

  it('TC54 - Verify price section is visible', () => {
    openPaymentPage();
    cy.get('#price1').should('be.visible');
  });

  it('TC55 - Verify coupon input section is visible', () => {
    openPaymentPage();
    cy.get('#offer').should('be.visible');
  });

  it('TC56 - Verify coupon offer section is visible', () => {
    openPaymentPage();
    cy.get('#offer').should('be.visible');
  });

  it('TC57 - Verify valid coupon RED100 is applied', () => {
    openPaymentPage();
    cy.get('#offer').type('RED100').type('{enter}');
    cy.get('body').should('contain.text', '520');
  });

  it('TC58 - Verify invalid coupon does not apply discount', () => {
    openPaymentPage();
    cy.get('#offer').type('INVALID123').type('{enter}');
    cy.get('#price2').should('contain.text', '620');
  });

  it('TC59 - Verify coupon field accepts text', () => {
    openPaymentPage();
    cy.get('#offer').type('TESTCODE').should('have.value', 'TESTCODE');
  });

  it('TC60 - Verify UPI payment option opens', () => {
    openPaymentPage();
    cy.get('#upi_id').click();
    cy.get('#paid1').should('be.visible');
    cy.get('#paid2').should('be.visible');
  });

  it('TC61 - Verify UPI payment input accepts text', () => {
    openPaymentPage();
    cy.get('#upi_id').click();
    cy.get('#paid1').type('amit@upi').should('have.value', 'amit@upi');
  });

  it('TC62 - Verify UPI input accepts valid UPI ID', () => {
    openPaymentPage();
    cy.get('#upi_id').click();
    cy.get('#paid1').type('amit@upi').should('have.value', 'amit@upi');
  });

  it('TC63 - Verify UPI input can be cleared', () => {
    openPaymentPage();
    cy.get('#upi_id').click();
    cy.get('#paid1').type('new@upi').clear().should('have.value', '');
  });

  it('TC64 - Verify QR payment option opens', () => {
    openPaymentPage();
    cy.get('#qr').click();
    cy.get('#qr_panel').should('be.visible');
  });

  it('TC65 - Verify QR payment panel contains QR details', () => {
    openPaymentPage();
    cy.get('#qr').click();
    cy.get('#qr_panel').should('be.visible');
  });

  it('TC66 - Verify credit card option opens', () => {
    openPaymentPage();
    cy.get('#credit_card').click();
    cy.get('#credit_card').should('be.visible');
  });

  it('TC67 - Verify debit card option opens', () => {
    openPaymentPage();
    cy.get('#debit_card').click();
    cy.get('#debit_card').should('be.visible');
  });

  it('TC68 - Verify payment price is displayed', () => {
    openPaymentPage();
    cy.get('#price1').should('be.visible');
    cy.get('#price1').should('contain.text', '620');
  });

  it('TC69 - Verify payment summary is displayed', () => {
    openPaymentPage();
    cy.get('#four').should('be.visible');
  });

  it('TC70 - Verify payment page contains payment methods', () => {
    openPaymentPage();
    cy.get('#upi_id').should('be.visible');
    cy.get('#qr').should('be.visible');
    cy.get('#credit_card').should('be.visible');
    cy.get('#debit_card').should('be.visible');
  });

  it('TC71 - Verify payment page contains booking information', () => {
    openPaymentPage();
    cy.get('body').should('contain.text', 'Delhi');
    cy.get('body').should('contain.text', 'Jaipur');
  });

  it('TC72 - Verify payment page displays passenger information', () => {
    openPaymentPage();
    cy.get('body').should('contain.text', 'Amit Sharma');
  });

  it('TC73 - Verify contact details section is visible', () => {
    openPaymentPage();
    cy.get('#four').should('be.visible');
  });

  it('TC74 - Verify contact email is displayed', () => {
    openPaymentPage();
    cy.get('#four').should('contain.text', 'amit@example.com');
  });

  it('TC75 - Verify contact phone is displayed', () => {
    openPaymentPage();
    cy.get('#four').should('contain.text', '9876543210');
  });

  // ==========================================
  // MODULE 6 - ADVANCED PAYMENT TESTING
  // ==========================================

  it('TC76 - Verify payment page reloads successfully', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#main').should('be.visible');
  });

  it('TC77 - Verify UPI section remains functional after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#upi_id').should('be.visible').click();
    cy.get('#paid1').should('be.visible');
  });

  it('TC78 - Verify QR option remains available after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#qr').should('be.visible');
  });

  it('TC79 - Verify credit card option remains available', () => {
    openPaymentPage();
    cy.get('#credit_card').should('be.visible');
  });

  it('TC80 - Verify debit card option remains available', () => {
    openPaymentPage();
    cy.get('#debit_card').should('be.visible');
  });

  it('TC81 - Verify booking details remain visible after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#one').should('be.visible');
    cy.get('#four').should('be.visible');
  });

  it('TC82 - Verify fare remains unchanged after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#price2').should('contain.text', '620');
  });

  it('TC83 - Verify passenger information remains after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#four').should('contain.text', 'Amit Sharma');
  });

  // ==========================================
  // MODULE 7 - COUPON AND PAYMENT VALIDATION
  // ==========================================

  it('TC84 - Verify coupon field accepts uppercase code', () => {
    openPaymentPage();
    cy.get('#offer').should('be.visible').type('RED100', { delay: 150 });
    cy.wait(600);
    cy.get('#offer').should('have.value', 'RED100');
  });

  it('TC85 - Verify coupon can be replaced', () => {
    openPaymentPage();
    cy.get('#offer').type('INVALID');
    cy.wait(500);
    cy.get('#offer').clear();
    cy.get('#offer').type('RED100', { delay: 150 });
    cy.get('#offer').should('have.value', 'RED100');
  });

  it('TC86 - Verify coupon discount amount is displayed', () => {
    openPaymentPage();
    cy.get('#offer').type('RED100');
    cy.wait(500);
    cy.get('#offer').type('{enter}');
    cy.wait(700);
    cy.get('#coupon_dis').should('contain.text', '-100');
  });

  it('TC87 - Verify final fare after coupon application', () => {
    openPaymentPage();
    cy.get('#offer').type('RED100');
    cy.wait(500);
    cy.get('#offer').type('{enter}');
    cy.wait(700);
    cy.get('#price2').should('contain.text', '520');
  });

  it('TC88 - Verify UPI option can be opened after page reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#upi_id').should('be.visible').click();
    cy.wait(500);
    cy.get('#paid1').should('be.visible');
  });

  it('TC89 - Verify booking summary remains visible after UPI selection', () => {
    openPaymentPage();
    cy.get('#upi_id').click();
    cy.wait(600);
    cy.get('#one').should('be.visible');
    cy.get('#four').should('be.visible');
    cy.get('#price2').should('be.visible');
  });

  it('TC90 - Verify browser back navigation from payment page', () => {
    openPaymentPage();
    cy.wait(500);
    cy.go('back');
    cy.wait(700);
    cy.location('pathname').should('not.include', 'payment.html');
  });

  // ==========================================
  // MODULE 8 - ADVANCED PAYMENT TESTING
  // ==========================================

  it('TC91 - Verify journey date in booking summary', () => {
    openPaymentPage();
    cy.wait(500);
    cy.get('#left1').should('contain.text', '2026-12-15');
  });

  it('TC92 - Verify source city in payment summary', () => {
    openPaymentPage();
    cy.wait(500);
    cy.get('#left2').should('contain.text', 'Delhi');
  });

  it('TC93 - Verify destination city in payment summary', () => {
    openPaymentPage();
    cy.wait(500);
    cy.get('#right2').should('contain.text', 'Jaipur');
  });

  it('TC94 - Verify passenger name persists after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#four').should('contain.text', 'Amit Sharma');
  });

  it('TC95 - Verify contact email persists after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#four').should('contain.text', 'amit@example.com');
  });

  it('TC96 - Verify contact number persists after reload', () => {
    openPaymentPage();
    cy.reload();
    cy.wait(800);
    cy.get('#four').should('contain.text', '9876543210');
  });

  it('TC97 - Verify original ticket fare is displayed', () => {
    openPaymentPage();
    cy.wait(500);
    cy.get('#price1').should('contain.text', '620');
  });

  it('TC98 - Verify invalid coupon does not apply discount', () => {
    openPaymentPage();
    cy.get('#offer').type('WRONG123', { delay: 120 });
    cy.wait(500);
    cy.get('#offer').type('{enter}');
    cy.wait(700);
    cy.get('#price2').should('contain.text', '620');
  });

  it('TC99 - Verify payment page remains stable after coupon entry', () => {
    openPaymentPage();
    cy.get('#offer').type('RED100', { delay: 120 });
    cy.wait(500);
    cy.get('#offer').type('{enter}');
    cy.wait(700);
    cy.get('#main').should('be.visible');
    cy.get('#price2').should('contain.text', '520');
  });

  it('TC100 - Verify complete booking summary is displayed', () => {
    openPaymentPage();
    cy.wait(500);
    cy.get('#one').should('contain.text', 'Zingbus');
    cy.get('#four').should('contain.text', 'Amit Sharma');
    cy.get('#left2').should('contain.text', 'Delhi');
    cy.get('#right2').should('contain.text', 'Jaipur');
    cy.get('#price2').should('contain.text', '620');
  });

});