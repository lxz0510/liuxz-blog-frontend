import tailwind from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default {
    plugins: [
        tailwind({
            content: ['./layout/*.vue'],
            plugins: [tailwindTypography]
        })
    ]
}