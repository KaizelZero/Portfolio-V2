<script lang="ts">
  import { Section, SkillLayout } from '$lib/components/sections';
  import { resumeData } from '$lib/config/site-config';
</script>

<Section title="Skills">
  <SkillLayout title="Languages" skills={resumeData.skills.languages} />
  <SkillLayout title="Frontend" skills={resumeData.skills.frontend} />
  <SkillLayout title="Backend" skills={resumeData.skills.backend} />
  <SkillLayout title="Others" skills={resumeData.skills.others} />
</Section>
