import React from 'react'
import defaultData from '../data/weddingParty.json'

function initialsOf(name) {
  if (!name) return ''
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
}

function Group({ title, members = [] }) {
  if (!members || members.length === 0) return null
  return (
    <div className="party-group">
      <h3 className="group-title">{title}</h3>
      <div className="party-grid">
        {members.map((member) => (
          <div key={member.name} className="party-card">
            <div className="avatar" aria-hidden>
              {member.photo ? (
                //<img src={member.photo} alt={member.name} className="avatar-img" />
                <img
                  src={import.meta.env.BASE_URL + member.photo}
                  alt={member.name}
                  className="avatar-img"
                />
              ) : (
                (member.initials || initialsOf(member.name))
              )}
            </div>
            <div className="info">
              <strong>{member.name}</strong>
              {member.role && <div className="role">{member.role}</div>}
              {member.description && <div className="description">{member.description}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WeddingParty({ party = null }) {
  // party can be:
  // - null -> use defaultData (object with couple, parents, weddingParty)
  // - an array -> treat as list of wedding party members
  // - an object with those groups
  if (Array.isArray(party)) {
    return (
      <div className="wedding-party">
        <Group title="Wedding Party" members={party} />
      </div>
    )
  }

  const data = party || defaultData

  return (
    <div className="wedding-party">
      <Group title="The Couple" members={data.couple} />
      <Group title="Parents" members={data.parents} />
      <Group title="Wedding Party" members={data.weddingParty} />
    </div>
  )
}
