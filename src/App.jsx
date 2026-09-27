import { useState } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleClaim = async (event) => {
    event.preventDefault()
    setError('')
    setCopied(false)

    const form = event.currentTarget
    const name = form.name.value.trim()
    const phone = form.phone.value.replace(/\D/g, '')

    // Name validation
    if (name.length < 2) {
      setError('Please enter your name.')
      return
    }

    // Indian mobile number validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    setLoading(true)

    try {
      // Mock API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Assignment-compatible mock response
      const response = {
        success: true,
        claimCode: 'MORROW-7F2K',
        message: 'Your offer has been claimed.',
      }

      // Error-state testing:
      // Enter a number ending with 0000 to simulate an API failure.
      if (phone.endsWith('0000')) {
        response.success = false
        response.message =
          'Unable to process your request. Please try again.'
      }

      if (!response.success) {
        throw new Error(response.message)
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err.message || 'Unable to process your request.'
      )
    } finally {
      setLoading(false)
    }
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText('MORROW-7F2K')
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <nav className="navbar">
          <div className="brand">MORROW</div>

          <span className="location">
            SECTOR 104 · NOIDA
          </span>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              A LITTLE REASON TO COME BACK
            </p>

            <h1>
              Your next coffee
              <span>is ₹150 OFF.</span>
            </h1>

            <p className="hero-description">
              Good coffee, slow mornings and a little something
              on us. Claim your offer before your next visit to
              Morrow.
            </p>

            <button
              className="primary-button"
              type="button"
              onClick={() =>
                document
                  .getElementById('claim')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
            >
              Claim ₹150 OFF
              <span>↗</span>
            </button>
          </div>

          <div
            className="coffee-art"
            aria-label="Coffee illustration"
          >
            <div className="coffee-glow" />

            <div className="coffee-cup">
              <div className="coffee" />
              <div className="steam steam-one" />
              <div className="steam steam-two" />
              <div className="handle" />
            </div>

            <div className="offer-card">
              <small>YOUR NEXT VISIT</small>
              <strong>₹150 OFF</strong>
            </div>
          </div>
        </div>

        <div className="scroll-note">
          <span>SCROLL TO CLAIM</span>
          <span>↓</span>
        </div>
      </section>

      {/* CLAIM SECTION */}
      <section
        className="claim-section"
        id="claim"
      >
        <div className="section-label">
          <span>01</span>
          <span>CLAIM YOUR OFFER</span>
        </div>

        {!submitted ? (
          <div className="claim-layout">
            <div className="claim-copy">
              <h2>
                Save it for
                <br />
                your next visit.
              </h2>

              <p>
                Enter your details and we'll generate a unique
                claim code for your ₹150 OFF offer.
              </p>
            </div>

            <form
              className="claim-form"
              onSubmit={handleClaim}
              noValidate
            >
              {/* NAME */}
              <div className="field">
                <label htmlFor="name">
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Kapil"
                  autoComplete="name"
                  aria-describedby="name-help"
                  required
                />

                <span
                  id="name-help"
                  className="sr-only"
                >
                  Enter your name.
                </span>
              </div>

              {/* PHONE */}
              <div className="field">
                <label htmlFor="phone">
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  aria-describedby="phone-help"
                  required
                />

                <span
                  id="phone-help"
                  className="sr-only"
                >
                  Enter your 10-digit Indian mobile number.
                </span>
              </div>

              {/* SUBMIT */}
              <button
                className="submit-button"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? 'Claiming...'
                  : 'Claim ₹150 OFF'}

                {!loading && <span>→</span>}
              </button>

              {/* ERROR */}
              {error && (
                <p
                  className="form-error"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </p>
              )}

              <p className="form-note">
                Your details are only used to process this offer.
              </p>
            </form>
          </div>
        ) : (
          /* SUCCESS */
          <div
            className="success-card"
            aria-live="polite"
          >
            <p className="success-label">
              OFFER CLAIMED
            </p>

            <h2>
              ₹150 OFF
              <br />
              is yours.
            </h2>

            <p>
              Your offer has been claimed.
              <br />
              Show this code when you visit Morrow Café.
            </p>

            <div className="claim-code">
              MORROW-7F2K
            </div>

            <button
              className="copy-button"
              type="button"
              onClick={copyCode}
            >
              {copied
                ? 'Code copied ✓'
                : 'Copy claim code'}
            </button>
          </div>
        )}
      </section>

      {/* EXPERIENCE */}
      <section className="experience">
        <div className="section-label">
          <span>02</span>
          <span>THE MORROW EXPERIENCE</span>
        </div>

        <div className="experience-grid">
          <article className="experience-card">
            <span>01</span>

            <h3>Good coffee.</h3>

            <p>
              Thoughtfully brewed, every single day.
            </p>
          </article>

          <article className="experience-card">
            <span>02</span>

            <h3>Slow moments.</h3>

            <p>
              A place to pause, work, meet and unwind.
            </p>
          </article>

          <article className="experience-card">
            <span>03</span>

            <h3>See you soon.</h3>

            <p>
              Come back to your new favourite corner.
            </p>
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="brand">
          MORROW
        </div>

        <div>
          Sector 104
          <br />
          Noida, India
        </div>

        <div>
          © 2026 Morrow Café
        </div>
      </footer>
    </main>
  )
}

export default App