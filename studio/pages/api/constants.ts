const PUBLIC_URL = new URL(process.env.SUPABASE_PUBLIC_URL || 'http://localhost:8000')

export const PROJECT_REST_URL = `${PUBLIC_URL.origin}/rest/v1/`
export const PROJECT_ENDPOINT = PUBLIC_URL.host
export const PROJECT_ENDPOINT_PROTOCOL = PUBLIC_URL.protocol.replace(':', '')

var project_names = process.env.DEFAULT_PROJECT_NAMES?.split(",")
var project_configs: { id: number; ref: string; name: string; organization_id: number; cloud_provider: string; status: string; region: string; inserted_at: string }[] = []
project_names?.forEach((name, index) => {
  const id = 1 + index
  const ref = name.toLowerCase()
  project_configs.push({
    id: id,
    ref: ref,
    name: name,
    organization_id: 1,
    cloud_provider: 'localhost',
    status: 'ACTIVE_HEALTHY',
    region: 'local',
    inserted_at: '2021-08-02T06:40:40.646Z',
  })
})
export const DEFAULT_PROJECT = {
  id: 1,
  ref: 'default',
  name: process.env.DEFAULT_PROJECT_NAME || 'Default Project',
  organization_id: 1,
  cloud_provider: 'localhost',
  status: 'ACTIVE_HEALTHY',
  region: 'local',
  inserted_at: '2021-08-02T06:40:40.646Z',
}

export const DEFAULT_PROJECTS = project_configs
